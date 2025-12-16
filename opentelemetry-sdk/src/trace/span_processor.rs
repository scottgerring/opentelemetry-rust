//! # OpenTelemetry Span Processor Interface
//!
//! Span processor is an interface which allows hooks for span start and end method
//! invocations. The span processors are invoked only when
//! [`is_recording`] is true.
//!
//! Built-in span processors are responsible for batching and conversion of spans to
//! exportable representation and passing batches to exporters.
//!
//! Span processors can be registered directly on SDK [`TracerProvider`] and they are
//! invoked in the same order as they were registered.
//!
//! All `Tracer` instances created by a `TracerProvider` share the same span processors.
//! Changes to this collection reflect in all `Tracer` instances.
//!
//! The following diagram shows `SpanProcessor`'s relationship to other components
//! in the SDK:
//!
//! ```ascii
//!   +-----+--------------+   +-----------------------+   +-------------------+
//!   |     |              |   |                       |   |                   |
//!   |     |              |   | (Batch)SpanProcessor  |   |    SpanExporter   |
//!   |     |              +---> (Simple)SpanProcessor +--->  (OTLPExporter)   |
//!   |     |              |   |                       |   |                   |
//!   | SDK | Tracer.span()|   +-----------------------+   +-------------------+
//!   |     | Span.end()   |
//!   |     |              |
//!   |     |              |
//!   |     |              |
//!   |     |              |
//!   +-----+--------------+
//! ```
//!
//! [`is_recording`]: opentelemetry::trace::Span::is_recording()
//! [`TracerProvider`]: opentelemetry::trace::TracerProvider

use crate::error::{OTelSdkError, OTelSdkResult};
use crate::resource::Resource;
use crate::runtime::{to_interval_stream, NoAsync, RuntimeChannel, TrySend};
use crate::trace::Span;
use crate::trace::{SpanData, SpanExporter};
use futures_channel::oneshot;
use futures_util::{
    future::{self, Either},
    pin_mut,
    stream::{self, StreamExt as _},
};
use opentelemetry::Context;
use opentelemetry::{otel_debug, otel_error, otel_warn};
use std::cmp::min;
use std::sync::atomic::{AtomicUsize, Ordering};
use std::sync::Arc;
use std::sync::Mutex;
use std::{env, fmt, str::FromStr, time::Duration};

/// Delay interval between two consecutive exports.
pub(crate) const OTEL_BSP_SCHEDULE_DELAY: &str = "OTEL_BSP_SCHEDULE_DELAY";
/// Default delay interval between two consecutive exports.
pub(crate) const OTEL_BSP_SCHEDULE_DELAY_DEFAULT: Duration = Duration::from_millis(5_000);
/// Maximum queue size
pub(crate) const OTEL_BSP_MAX_QUEUE_SIZE: &str = "OTEL_BSP_MAX_QUEUE_SIZE";
/// Default maximum queue size
pub(crate) const OTEL_BSP_MAX_QUEUE_SIZE_DEFAULT: usize = 2_048;
/// Maximum batch size, must be less than or equal to OTEL_BSP_MAX_QUEUE_SIZE
pub(crate) const OTEL_BSP_MAX_EXPORT_BATCH_SIZE: &str = "OTEL_BSP_MAX_EXPORT_BATCH_SIZE";
/// Default maximum batch size
pub(crate) const OTEL_BSP_MAX_EXPORT_BATCH_SIZE_DEFAULT: usize = 512;
/// Maximum allowed time to export data.
pub(crate) const OTEL_BSP_EXPORT_TIMEOUT: &str = "OTEL_BSP_EXPORT_TIMEOUT";
/// Default maximum allowed time to export data.
pub(crate) const OTEL_BSP_EXPORT_TIMEOUT_DEFAULT: Duration = Duration::from_millis(30_000);
/// Environment variable to configure max concurrent exports for batch span
/// processor.
pub(crate) const OTEL_BSP_MAX_CONCURRENT_EXPORTS: &str = "OTEL_BSP_MAX_CONCURRENT_EXPORTS";
/// Default max concurrent exports for BSP
pub(crate) const OTEL_BSP_MAX_CONCURRENT_EXPORTS_DEFAULT: usize = 1;

/// `SpanProcessor` is an interface which allows hooks for span start and end
/// method invocations. The span processors are invoked only when is_recording
/// is true.
pub trait SpanProcessor: Send + Sync + std::fmt::Debug {
    /// `on_start` is called when a `Span` is started.  This method is called
    /// synchronously on the thread that started the span, therefore it should
    /// not block or throw exceptions.
    fn on_start(&self, span: &mut Span, cx: &Context);
    /// `on_end` is called after a `Span` is ended (i.e., the end timestamp is
    /// already set). This method is called synchronously within the `Span::end`
    /// API, therefore it should not block or throw an exception.
    /// TODO - This method should take reference to `SpanData`
    fn on_end(&self, span: SpanData);
    /// Force the spans lying in the cache to be exported.
    fn force_flush(&self) -> OTelSdkResult;
    /// Shuts down the processor. Called when SDK is shut down. This is an
    /// opportunity for processors to do any cleanup required.
    ///
    /// Implementation should make sure shutdown can be called multiple times.
    fn shutdown_with_timeout(&self, timeout: Duration) -> OTelSdkResult;
    /// shutdown the processor with a default timeout.
    fn shutdown(&self) -> OTelSdkResult {
        self.shutdown_with_timeout(Duration::from_secs(5))
    }
    /// Set the resource for the span processor.
    fn set_resource(&mut self, _resource: &Resource) {}
}

/// A [SpanProcessor] that passes finished spans to the configured
/// `SpanExporter`, as soon as they are finished, without any batching. This is
/// typically useful for debugging and testing. For scenarios requiring higher
/// performance/throughput, consider using [BatchSpanProcessor].
/// Spans are exported synchronously
/// in the same thread that emits the log record.
/// When using this processor with the OTLP Exporter, the following exporter
/// features are supported:
/// - `grpc-tonic`: This requires TracerProvider to be created within a tokio
///   runtime. Spans can be emitted from any thread, including tokio runtime
///   threads.
/// - `reqwest-blocking-client`: TracerProvider may be created anywhere, but
///   spans must be emitted from a non-tokio runtime thread.
/// - `reqwest-client`: TracerProvider may be created anywhere, but spans must be
///   emitted from a tokio runtime thread.
#[derive(Debug)]
pub struct SimpleSpanProcessor<T: SpanExporter> {
    exporter: Mutex<T>,
}

impl<T: SpanExporter> SimpleSpanProcessor<T> {
    /// Create a new [SimpleSpanProcessor] using the provided exporter.
    pub fn new(exporter: T) -> Self {
        Self {
            exporter: Mutex::new(exporter),
        }
    }
}

impl<T: SpanExporter> SpanProcessor for SimpleSpanProcessor<T> {
    fn on_start(&self, _span: &mut Span, _cx: &Context) {
        // Ignored
    }

    fn on_end(&self, span: SpanData) {
        if !span.span_context.is_sampled() {
            return;
        }

        let result = self
            .exporter
            .lock()
            .map_err(|_| OTelSdkError::InternalFailure("SimpleSpanProcessor mutex poison".into()))
            .and_then(|exporter| futures_executor::block_on(exporter.export(vec![span])));

        if let Err(err) = result {
            // TODO: check error type, and log `error` only if the error is user-actionable, else log `debug`
            otel_debug!(
                name: "SimpleProcessor.OnEnd.Error",
                reason = format!("{:?}", err)
            );
        }
    }

    fn force_flush(&self) -> OTelSdkResult {
        // Nothing to flush for simple span processor.
        Ok(())
    }

    fn shutdown_with_timeout(&self, timeout: Duration) -> OTelSdkResult {
        if let Ok(exporter) = self.exporter.lock() {
            exporter.shutdown_with_timeout(timeout)
        } else {
            Err(OTelSdkError::InternalFailure(
                "SimpleSpanProcessor mutex poison at shutdown".into(),
            ))
        }
    }

    fn set_resource(&mut self, resource: &Resource) {
        if let Ok(mut exporter) = self.exporter.lock() {
            exporter.set_resource(resource);
        }
    }
}

/// Batch span processor configuration.
/// Use [`BatchConfigBuilder`] to configure your own instance of [`BatchConfig`].
#[derive(Debug)]
pub struct BatchConfig {
    /// The maximum queue size to buffer spans for delayed processing. If the
    /// queue gets full it drops the spans. The default value of is 2048.
    pub(crate) max_queue_size: usize,

    /// The delay interval in milliseconds between two consecutive processing
    /// of batches. The default value is 5 seconds.
    pub(crate) scheduled_delay: Duration,

    /// The maximum number of spans to process in a single batch. If there are
    /// more than one batch worth of spans then it processes multiple batches
    /// of spans one batch after the other without any delay. The default value
    /// is 512.
    pub(crate) max_export_batch_size: usize,

    /// The maximum duration to export a batch of data.
    pub(crate) max_export_timeout: Duration,

    /// Maximum number of concurrent exports
    ///
    /// Limits the number of spawned tasks for exports and thus memory consumed
    /// by an exporter. A value of 1 will cause exports to be performed
    /// synchronously on the BatchSpanProcessor task.
    ///
    /// Note: This field is currently unused as the processor processes exports
    /// sequentially. It is retained for API compatibility with BatchConfigBuilder.
    #[allow(dead_code)]
    pub(crate) max_concurrent_exports: usize,
}

impl Default for BatchConfig {
    fn default() -> Self {
        BatchConfigBuilder::default().build()
    }
}

/// A builder for creating [`BatchConfig`] instances.
#[derive(Debug)]
pub struct BatchConfigBuilder {
    max_queue_size: usize,
    scheduled_delay: Duration,
    max_export_batch_size: usize,
    max_export_timeout: Duration,
    max_concurrent_exports: usize,
}

impl Default for BatchConfigBuilder {
    /// Create a new [`BatchConfigBuilder`] initialized with default batch config values as per the specs.
    /// The values are overriden by environment variables if set.
    /// The supported environment variables are:
    /// * `OTEL_BSP_MAX_QUEUE_SIZE`
    /// * `OTEL_BSP_SCHEDULE_DELAY`
    /// * `OTEL_BSP_MAX_EXPORT_BATCH_SIZE`
    /// * `OTEL_BSP_EXPORT_TIMEOUT`
    /// * `OTEL_BSP_MAX_CONCURRENT_EXPORTS`
    ///
    /// Note: Programmatic configuration overrides any value set via the environment variable.
    fn default() -> Self {
        BatchConfigBuilder {
            max_queue_size: OTEL_BSP_MAX_QUEUE_SIZE_DEFAULT,
            scheduled_delay: OTEL_BSP_SCHEDULE_DELAY_DEFAULT,
            max_export_batch_size: OTEL_BSP_MAX_EXPORT_BATCH_SIZE_DEFAULT,
            max_export_timeout: OTEL_BSP_EXPORT_TIMEOUT_DEFAULT,
            max_concurrent_exports: OTEL_BSP_MAX_CONCURRENT_EXPORTS_DEFAULT,
        }
        .init_from_env_vars()
    }
}

impl BatchConfigBuilder {
    /// Set max_queue_size for [`BatchConfigBuilder`].
    /// It's the maximum queue size to buffer spans for delayed processing.
    /// If the queue gets full it will drops the spans.
    /// The default value is 2048.
    ///
    /// Corresponding environment variable: `OTEL_BSP_MAX_QUEUE_SIZE`.
    ///
    /// Note: Programmatically setting this will override any value set via the environment variable.
    pub fn with_max_queue_size(mut self, max_queue_size: usize) -> Self {
        self.max_queue_size = max_queue_size;
        self
    }

    /// Set max_export_batch_size for [`BatchConfigBuilder`].
    /// It's the maximum number of spans to process in a single batch. If there are
    /// more than one batch worth of spans then it processes multiple batches
    /// of spans one batch after the other without any delay. The default value
    /// is 512.
    ///
    /// Corresponding environment variable: `OTEL_BSP_MAX_EXPORT_BATCH_SIZE`.
    ///
    /// Note: Programmatically setting this will override any value set via the environment variable.
    pub fn with_max_export_batch_size(mut self, max_export_batch_size: usize) -> Self {
        self.max_export_batch_size = max_export_batch_size;
        self
    }

    /// Set max_concurrent_exports for [`BatchConfigBuilder`].
    /// It's the maximum number of concurrent exports.
    /// Limits the number of spawned tasks for exports and thus memory consumed by an exporter.
    /// The default value is 1.
    /// If the max_concurrent_exports value is default value, it will cause exports to be performed
    /// synchronously on the BatchSpanProcessor task.
    /// The default value is 1.
    ///
    /// Corresponding environment variable: `OTEL_BSP_MAX_CONCURRENT_EXPORTS`.
    ///
    /// Note: Programmatically setting this will override any value set via the environment variable.
    pub fn with_max_concurrent_exports(mut self, max_concurrent_exports: usize) -> Self {
        self.max_concurrent_exports = max_concurrent_exports;
        self
    }

    /// Set scheduled_delay_duration for [`BatchConfigBuilder`].
    /// It's the delay interval in milliseconds between two consecutive processing of batches.
    /// The default value is 5000 milliseconds.
    ///
    /// Corresponding environment variable: `OTEL_BSP_SCHEDULE_DELAY`.
    ///
    /// Note: Programmatically setting this will override any value set via the environment variable.
    pub fn with_scheduled_delay(mut self, scheduled_delay: Duration) -> Self {
        self.scheduled_delay = scheduled_delay;
        self
    }

    /// Set max_export_timeout for [`BatchConfigBuilder`].
    /// It's the maximum duration to export a batch of data.
    /// The The default value is 30000 milliseconds.
    ///
    /// Corresponding environment variable: `OTEL_BSP_EXPORT_TIMEOUT`.
    ///
    /// Note: Programmatically setting this will override any value set via the environment variable.
    pub fn with_max_export_timeout(mut self, max_export_timeout: Duration) -> Self {
        self.max_export_timeout = max_export_timeout;
        self
    }

    /// Builds a `BatchConfig` enforcing the following invariants:
    /// * `max_export_batch_size` must be less than or equal to `max_queue_size`.
    pub fn build(self) -> BatchConfig {
        // max export batch size must be less or equal to max queue size.
        // we set max export batch size to max queue size if it's larger than max queue size.
        let max_export_batch_size = min(self.max_export_batch_size, self.max_queue_size);

        BatchConfig {
            max_queue_size: self.max_queue_size,
            scheduled_delay: self.scheduled_delay,
            max_export_timeout: self.max_export_timeout,
            max_concurrent_exports: self.max_concurrent_exports,
            max_export_batch_size,
        }
    }

    fn init_from_env_vars(mut self) -> Self {
        if let Some(max_concurrent_exports) = env::var(OTEL_BSP_MAX_CONCURRENT_EXPORTS)
            .ok()
            .and_then(|max_concurrent_exports| usize::from_str(&max_concurrent_exports).ok())
        {
            self.max_concurrent_exports = max_concurrent_exports;
        }

        if let Some(max_queue_size) = env::var(OTEL_BSP_MAX_QUEUE_SIZE)
            .ok()
            .and_then(|queue_size| usize::from_str(&queue_size).ok())
        {
            self.max_queue_size = max_queue_size;
        }

        if let Some(scheduled_delay) = env::var(OTEL_BSP_SCHEDULE_DELAY)
            .ok()
            .and_then(|delay| u64::from_str(&delay).ok())
        {
            self.scheduled_delay = Duration::from_millis(scheduled_delay);
        }

        if let Some(max_export_batch_size) = env::var(OTEL_BSP_MAX_EXPORT_BATCH_SIZE)
            .ok()
            .and_then(|batch_size| usize::from_str(&batch_size).ok())
        {
            self.max_export_batch_size = max_export_batch_size;
        }

        // max export batch size must be less or equal to max queue size.
        // we set max export batch size to max queue size if it's larger than max queue size.
        if self.max_export_batch_size > self.max_queue_size {
            self.max_export_batch_size = self.max_queue_size;
        }

        if let Some(max_export_timeout) = env::var(OTEL_BSP_EXPORT_TIMEOUT)
            .ok()
            .and_then(|timeout| u64::from_str(&timeout).ok())
        {
            self.max_export_timeout = Duration::from_millis(max_export_timeout);
        }

        self
    }
}

/// The `BatchSpanProcessor` collects finished spans in a buffer and exports them
/// in batches to the configured `SpanExporter`. This processor is ideal for
/// high-throughput environments, as it minimizes the overhead of exporting spans
/// individually.
///
/// Batch span processors need to run a background task to collect and send
/// spans. Different runtimes need different ways to handle the background task.
///
/// Note: Configuring an opentelemetry `Runtime` that's not compatible with the
/// underlying runtime can cause deadlocks (see tokio section).
///
/// ### Use with Tokio
///
/// Tokio currently offers two different schedulers. One is
/// `current_thread_scheduler`, the other is `multiple_thread_scheduler`. Both
/// of them default to use batch span processors to install span exporters.
///
/// Tokio's `current_thread_scheduler` can cause the program to hang forever if
/// blocking work is scheduled with other tasks in the same runtime. To avoid
/// this, be sure to enable the `rt-tokio-current-thread` feature in this crate
/// if you are using that runtime (e.g. users of actix-web), and blocking tasks
/// will then be scheduled on a different thread.
///
/// # Examples
///
/// This processor can be configured with an [`executor`] of your choice to
/// batch and upload spans asynchronously when they end. If you have added a
/// library like [`tokio`], you can pass in their respective
/// `spawn` and `interval` functions to have batching performed in those
/// contexts.
///
/// ```
/// # #[cfg(feature="rt-tokio")]
/// # {
/// use opentelemetry::global;
/// use opentelemetry_sdk::{runtime, testing::trace::NoopSpanExporter, trace};
/// use opentelemetry_sdk::trace::BatchConfigBuilder;
/// use std::time::Duration;
///
/// #[tokio::main]
/// async fn main() {
///     // Configure your preferred exporter
///     let exporter = NoopSpanExporter::new();
///
///     // Create a batch span processor using an exporter and a runtime
///     let batch = trace::BatchSpanProcessor::builder_with_runtime(exporter, runtime::Tokio)
///         .with_batch_config(BatchConfigBuilder::default().with_max_queue_size(4096).build())
///         .build();
///
///     // Then use the `with_batch_exporter` method to have the provider export spans in batches.
///     let provider = trace::SdkTracerProvider::builder()
///         .with_span_processor(batch)
///         .build();
///
///     let _ = global::set_tracer_provider(provider);
/// }
/// # }
/// ```
///
/// [`executor`]: https://docs.rs/futures/0.3/futures/executor/index.html
/// [`tokio`]: https://tokio.rs
pub struct BatchSpanProcessor<R: RuntimeChannel> {
    message_sender: R::Sender<BatchMessage>,

    // Track dropped spans
    dropped_spans_count: AtomicUsize,

    // Track the maximum queue size that was configured for this processor
    max_queue_size: usize,
}

impl<R: RuntimeChannel> fmt::Debug for BatchSpanProcessor<R> {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        f.debug_struct("BatchSpanProcessor")
            .field("message_sender", &self.message_sender)
            .finish()
    }
}

impl<R: RuntimeChannel> SpanProcessor for BatchSpanProcessor<R> {
    fn on_start(&self, _span: &mut Span, _cx: &Context) {
        // Ignored
    }

    fn on_end(&self, span: SpanData) {
        if !span.span_context.is_sampled() {
            return;
        }

        let result = self.message_sender.try_send(BatchMessage::ExportSpan(span));

        // If the queue is full, and we can't buffer a span
        if result.is_err() {
            // Increment the number of dropped spans. If this is the first time we've had to drop,
            // emit a warning.
            if self.dropped_spans_count.fetch_add(1, Ordering::Relaxed) == 0 {
                otel_warn!(name: "BatchSpanProcessor.SpanDroppingStarted",
                    message = "Beginning to drop span messages due to full/internal errors. No further log will be emitted for further drops until Shutdown. During Shutdown time, a log will be emitted with exact count of total spans dropped.");
            }
        }
    }

    fn force_flush(&self) -> OTelSdkResult {
        let (res_sender, res_receiver) = oneshot::channel();
        self.message_sender
            .try_send(BatchMessage::Flush(Some(res_sender)))
            .map_err(|err| {
                OTelSdkError::InternalFailure(format!("Failed to send flush message: {err}"))
            })?;

        futures_executor::block_on(res_receiver).map_err(|err| {
            OTelSdkError::InternalFailure(format!("Flush response channel error: {err}"))
        })?
    }

    fn shutdown_with_timeout(&self, _timeout: Duration) -> OTelSdkResult {
        let dropped_spans = self.dropped_spans_count.load(Ordering::Relaxed);
        let max_queue_size = self.max_queue_size;
        if dropped_spans > 0 {
            otel_warn!(
                name: "BatchSpanProcessor.Shutdown",
                dropped_spans = dropped_spans,
                max_queue_size = max_queue_size,
                message = "Spans were dropped due to a full or closed queue. The count represents the total count of span records dropped in the lifetime of the BatchSpanProcessor. Consider increasing the queue size and/or decrease delay between intervals."
            );
        }

        let (res_sender, res_receiver) = oneshot::channel();
        self.message_sender
            .try_send(BatchMessage::Shutdown(res_sender))
            .map_err(|err| {
                OTelSdkError::InternalFailure(format!("Failed to send shutdown message: {err}"))
            })?;

        futures_executor::block_on(res_receiver).map_err(|err| {
            OTelSdkError::InternalFailure(format!("Shutdown response channel error: {err}"))
        })?
    }

    fn set_resource(&mut self, resource: &Resource) {
        let resource = Arc::new(resource.clone());
        let _ = self
            .message_sender
            .try_send(BatchMessage::SetResource(resource));
    }
}

/// Messages sent between application thread and batch span processor's work thread.
// In this enum the size difference is not a concern because:
// 1. If we wrap SpanData into a pointer, it will add overhead when processing.
// 2. Most of the messages will be ExportSpan.
#[allow(clippy::large_enum_variant)]
#[derive(Debug)]
enum BatchMessage {
    /// Export spans, usually called when span ends
    ExportSpan(SpanData),
    /// Flush the current buffer to the backend, it can be triggered by
    /// pre configured interval or a call to `force_push` function.
    Flush(Option<oneshot::Sender<OTelSdkResult>>),
    /// Shut down the worker thread, push all spans in buffer to the backend.
    Shutdown(oneshot::Sender<OTelSdkResult>),
    /// Set the resource for the exporter.
    SetResource(Arc<Resource>),
}

/// Helper function to export spans with timeout
async fn export_with_timeout<E, R>(
    time_out: Duration,
    exporter: &E,
    runtime: &R,
    batch: Vec<SpanData>,
) -> OTelSdkResult
where
    E: SpanExporter + ?Sized,
    R: RuntimeChannel,
{
    if batch.is_empty() {
        return Ok(());
    }

    let export = exporter.export(batch);
    let timeout = runtime.delay(time_out);
    pin_mut!(export);
    pin_mut!(timeout);

    match future::select(export, timeout).await {
        Either::Left((export_res, _)) => export_res,
        Either::Right((_, _)) => Err(OTelSdkError::Timeout(time_out)),
    }
}

impl<R: RuntimeChannel> BatchSpanProcessor<R> {
    pub(crate) fn new<E>(mut exporter: E, config: BatchConfig, runtime: R) -> Self
    where
        E: SpanExporter + Send + Sync + 'static,
    {
        let (message_sender, message_receiver) =
            runtime.batch_message_channel(config.max_queue_size);

        let max_queue_size = config.max_queue_size;
        let inner_runtime = runtime.clone();

        // Spawn worker process via user-defined spawn function.
        runtime.spawn(async move {
            // Timer will take a reference to the current runtime, so its important we do this within the
            // runtime.spawn()
            let ticker = to_interval_stream(inner_runtime.clone(), config.scheduled_delay)
                .skip(1) // The ticker is fired immediately, so we should skip the first one to align with the interval.
                .map(|_| BatchMessage::Flush(None));

            let timeout_runtime = inner_runtime.clone();
            let mut spans = Vec::new();
            let mut messages = Box::pin(stream::select(message_receiver, ticker));

            while let Some(message) = messages.next().await {
                match message {
                    // Span has finished, add to buffer of pending spans.
                    BatchMessage::ExportSpan(span) => {
                        spans.push(span);
                        if spans.len() == config.max_export_batch_size {
                            let result = export_with_timeout(
                                config.max_export_timeout,
                                &exporter,
                                &timeout_runtime,
                                spans.split_off(0),
                            )
                            .await;

                            if let Err(err) = result {
                                otel_error!(
                                    name: "BatchSpanProcessor.Export.Error",
                                    error = format!("{}", err)
                                );
                            }
                        }
                    }
                    // Span batch interval time reached or a force flush has been invoked, export current spans.
                    BatchMessage::Flush(res_channel) => {
                        let result = export_with_timeout(
                            config.max_export_timeout,
                            &exporter,
                            &timeout_runtime,
                            spans.split_off(0),
                        )
                        .await;

                        if let Some(channel) = res_channel {
                            if let Err(send_error) = channel.send(result) {
                                otel_debug!(
                                    name: "BatchSpanProcessor.Flush.SendResultError",
                                    error = format!("{:?}", send_error),
                                );
                            }
                        }
                    }
                    // Stream has terminated or processor is shutdown, return to finish execution.
                    BatchMessage::Shutdown(ch) => {
                        let result = export_with_timeout(
                            config.max_export_timeout,
                            &exporter,
                            &timeout_runtime,
                            spans.split_off(0),
                        )
                        .await;

                        let _ = exporter.shutdown();

                        if let Err(send_error) = ch.send(result) {
                            otel_debug!(
                                name: "BatchSpanProcessor.Shutdown.SendResultError",
                                error = format!("{:?}", send_error),
                            );
                        }
                        break;
                    }
                    // propagate the resource
                    BatchMessage::SetResource(resource) => {
                        exporter.set_resource(&resource);
                    }
                }
            }
        });

        // Return batch processor with link to worker
        BatchSpanProcessor {
            message_sender,
            dropped_spans_count: AtomicUsize::new(0),
            max_queue_size,
        }
    }

    /// Create a new batch processor builder with explicit runtime selection.
    pub fn builder_with_runtime<E>(exporter: E, runtime: R) -> BatchSpanProcessorBuilder<E, R>
    where
        E: SpanExporter,
    {
        BatchSpanProcessorBuilder {
            exporter,
            config: Default::default(),
            runtime,
        }
    }
}

/// Backward-compatible builder that defaults to NoAsync runtime.
impl BatchSpanProcessor<NoAsync> {
    /// Create a new batch processor builder that defaults to the [`NoAsync`] runtime.
    ///
    /// This maintains backward compatibility with existing code. For explicit runtime
    /// selection, use [`BatchSpanProcessor::builder_with_runtime`].
    ///
    /// Note: When using this builder, the processor will use a dedicated background
    /// thread with `futures_executor::block_on()` for async operations. For better
    /// integration with async runtimes like Tokio, consider using
    /// `builder_with_runtime` with an explicit runtime.
    pub fn builder<E>(exporter: E) -> BatchSpanProcessorBuilder<E, NoAsync>
    where
        E: SpanExporter + 'static,
    {
        BatchSpanProcessorBuilder {
            exporter,
            config: Default::default(),
            runtime: NoAsync,
        }
    }
}

/// A builder for creating [`BatchSpanProcessor`] instances.
///
#[derive(Debug)]
pub struct BatchSpanProcessorBuilder<E, R> {
    exporter: E,
    config: BatchConfig,
    runtime: R,
}

impl<E, R> BatchSpanProcessorBuilder<E, R>
where
    E: SpanExporter + 'static,
    R: RuntimeChannel,
{
    /// Set the BatchConfig for [BatchSpanProcessorBuilder]
    pub fn with_batch_config(self, config: BatchConfig) -> Self {
        BatchSpanProcessorBuilder { config, ..self }
    }

    /// Set the runtime for the [BatchSpanProcessorBuilder].
    ///
    /// This allows changing the runtime after initial builder creation.
    pub fn with_runtime<R2: RuntimeChannel>(self, runtime: R2) -> BatchSpanProcessorBuilder<E, R2> {
        BatchSpanProcessorBuilder {
            exporter: self.exporter,
            config: self.config,
            runtime,
        }
    }

    /// Build a batch processor
    pub fn build(self) -> BatchSpanProcessor<R> {
        BatchSpanProcessor::new(self.exporter, self.config, self.runtime)
    }
}

#[cfg(all(test, feature = "testing", feature = "trace"))]
mod tests {
    // cargo test trace::span_processor::tests:: --features=testing
    use super::{
        SimpleSpanProcessor, SpanProcessor, OTEL_BSP_EXPORT_TIMEOUT,
        OTEL_BSP_MAX_EXPORT_BATCH_SIZE, OTEL_BSP_MAX_QUEUE_SIZE, OTEL_BSP_MAX_QUEUE_SIZE_DEFAULT,
        OTEL_BSP_SCHEDULE_DELAY, OTEL_BSP_SCHEDULE_DELAY_DEFAULT,
    };
    use crate::testing::trace::new_test_export_span_data;
    use crate::trace::span_processor::{
        OTEL_BSP_EXPORT_TIMEOUT_DEFAULT, OTEL_BSP_MAX_CONCURRENT_EXPORTS,
        OTEL_BSP_MAX_CONCURRENT_EXPORTS_DEFAULT, OTEL_BSP_MAX_EXPORT_BATCH_SIZE_DEFAULT,
    };
    use crate::trace::InMemorySpanExporterBuilder;
    use crate::trace::SpanData;
    use crate::trace::{BatchConfig, BatchConfigBuilder, SpanEvents, SpanLinks};
    use opentelemetry::trace::{SpanContext, SpanId, SpanKind, Status};
    use std::time::Duration;

    #[test]
    fn simple_span_processor_on_end_calls_export() {
        let exporter = InMemorySpanExporterBuilder::new().build();
        let processor = SimpleSpanProcessor::new(exporter.clone());
        let span_data = new_test_export_span_data();
        processor.on_end(span_data.clone());
        assert_eq!(exporter.get_finished_spans().unwrap()[0], span_data);
        let _result = processor.shutdown();
    }

    #[test]
    fn simple_span_processor_on_end_skips_export_if_not_sampled() {
        let exporter = InMemorySpanExporterBuilder::new().build();
        let processor = SimpleSpanProcessor::new(exporter.clone());
        let unsampled = SpanData {
            span_context: SpanContext::empty_context(),
            parent_span_id: SpanId::INVALID,
            parent_span_is_remote: false,
            span_kind: SpanKind::Internal,
            name: "opentelemetry".into(),
            start_time: opentelemetry::time::now(),
            end_time: opentelemetry::time::now(),
            attributes: Vec::new(),
            dropped_attributes_count: 0,
            events: SpanEvents::default(),
            links: SpanLinks::default(),
            status: Status::Unset,
            instrumentation_scope: Default::default(),
        };
        processor.on_end(unsampled);
        assert!(exporter.get_finished_spans().unwrap().is_empty());
    }

    #[test]
    fn simple_span_processor_shutdown_calls_shutdown() {
        let exporter = InMemorySpanExporterBuilder::new().build();
        let processor = SimpleSpanProcessor::new(exporter.clone());
        let span_data = new_test_export_span_data();
        processor.on_end(span_data.clone());
        assert!(!exporter.get_finished_spans().unwrap().is_empty());
        let _result = processor.shutdown();
        // Assume shutdown is called by ensuring spans are empty in the exporter
        assert!(exporter.get_finished_spans().unwrap().is_empty());
    }

    #[test]
    fn test_default_const_values() {
        assert_eq!(OTEL_BSP_MAX_QUEUE_SIZE, "OTEL_BSP_MAX_QUEUE_SIZE");
        assert_eq!(OTEL_BSP_MAX_QUEUE_SIZE_DEFAULT, 2048);
        assert_eq!(OTEL_BSP_SCHEDULE_DELAY, "OTEL_BSP_SCHEDULE_DELAY");
        assert_eq!(OTEL_BSP_SCHEDULE_DELAY_DEFAULT.as_millis(), 5000);
        assert_eq!(
            OTEL_BSP_MAX_EXPORT_BATCH_SIZE,
            "OTEL_BSP_MAX_EXPORT_BATCH_SIZE"
        );
        assert_eq!(OTEL_BSP_MAX_EXPORT_BATCH_SIZE_DEFAULT, 512);
        assert_eq!(OTEL_BSP_EXPORT_TIMEOUT, "OTEL_BSP_EXPORT_TIMEOUT");
        assert_eq!(OTEL_BSP_EXPORT_TIMEOUT_DEFAULT.as_millis(), 30000);
    }

    #[test]
    fn test_default_batch_config_adheres_to_specification() {
        let env_vars = vec![
            OTEL_BSP_SCHEDULE_DELAY,
            OTEL_BSP_EXPORT_TIMEOUT,
            OTEL_BSP_MAX_QUEUE_SIZE,
            OTEL_BSP_MAX_EXPORT_BATCH_SIZE,
            OTEL_BSP_MAX_CONCURRENT_EXPORTS,
        ];

        let config = temp_env::with_vars_unset(env_vars, BatchConfig::default);

        assert_eq!(
            config.max_concurrent_exports,
            OTEL_BSP_MAX_CONCURRENT_EXPORTS_DEFAULT
        );
        assert_eq!(config.scheduled_delay, OTEL_BSP_SCHEDULE_DELAY_DEFAULT);
        assert_eq!(config.max_export_timeout, OTEL_BSP_EXPORT_TIMEOUT_DEFAULT);
        assert_eq!(config.max_queue_size, OTEL_BSP_MAX_QUEUE_SIZE_DEFAULT);
        assert_eq!(
            config.max_export_batch_size,
            OTEL_BSP_MAX_EXPORT_BATCH_SIZE_DEFAULT
        );
    }

    #[test]
    fn test_code_based_config_overrides_env_vars() {
        let env_vars = vec![
            (OTEL_BSP_EXPORT_TIMEOUT, Some("60000")),
            (OTEL_BSP_MAX_CONCURRENT_EXPORTS, Some("5")),
            (OTEL_BSP_MAX_EXPORT_BATCH_SIZE, Some("1024")),
            (OTEL_BSP_MAX_QUEUE_SIZE, Some("4096")),
            (OTEL_BSP_SCHEDULE_DELAY, Some("2000")),
        ];

        temp_env::with_vars(env_vars, || {
            let config = BatchConfigBuilder::default()
                .with_max_export_batch_size(512)
                .with_max_queue_size(2048)
                .with_scheduled_delay(Duration::from_millis(1000))
                .with_max_concurrent_exports(10)
                .with_max_export_timeout(Duration::from_millis(2000))
                .build();

            assert_eq!(config.max_export_batch_size, 512);
            assert_eq!(config.max_queue_size, 2048);
            assert_eq!(config.scheduled_delay, Duration::from_millis(1000));
            assert_eq!(config.max_concurrent_exports, 10);
            assert_eq!(config.max_export_timeout, Duration::from_millis(2000));
        });
    }

    #[test]
    fn test_batch_config_configurable_by_env_vars() {
        let env_vars = vec![
            (OTEL_BSP_SCHEDULE_DELAY, Some("2000")),
            (OTEL_BSP_EXPORT_TIMEOUT, Some("60000")),
            (OTEL_BSP_MAX_QUEUE_SIZE, Some("4096")),
            (OTEL_BSP_MAX_EXPORT_BATCH_SIZE, Some("1024")),
        ];

        let config = temp_env::with_vars(env_vars, BatchConfig::default);

        assert_eq!(config.scheduled_delay, Duration::from_millis(2000));
        assert_eq!(config.max_export_timeout, Duration::from_millis(60000));
        assert_eq!(config.max_queue_size, 4096);
        assert_eq!(config.max_export_batch_size, 1024);
    }

    #[test]
    fn test_batch_config_max_export_batch_size_validation() {
        let env_vars = vec![
            (OTEL_BSP_MAX_QUEUE_SIZE, Some("256")),
            (OTEL_BSP_MAX_EXPORT_BATCH_SIZE, Some("1024")),
        ];

        let config = temp_env::with_vars(env_vars, BatchConfig::default);

        assert_eq!(config.max_queue_size, 256);
        assert_eq!(config.max_export_batch_size, 256);
        assert_eq!(config.scheduled_delay, OTEL_BSP_SCHEDULE_DELAY_DEFAULT);
        assert_eq!(config.max_export_timeout, OTEL_BSP_EXPORT_TIMEOUT_DEFAULT);
    }

    #[test]
    fn test_batch_config_with_fields() {
        let batch = BatchConfigBuilder::default()
            .with_max_export_batch_size(10)
            .with_scheduled_delay(Duration::from_millis(10))
            .with_max_queue_size(10)
            .with_max_concurrent_exports(10)
            .with_max_export_timeout(Duration::from_millis(10))
            .build();

        assert_eq!(batch.max_export_batch_size, 10);
        assert_eq!(batch.scheduled_delay, Duration::from_millis(10));
        assert_eq!(batch.max_queue_size, 10);
        assert_eq!(batch.max_concurrent_exports, 10);
        assert_eq!(batch.max_export_timeout, Duration::from_millis(10));
    }
}

#[cfg(all(test, feature = "testing", feature = "rt-tokio"))]
mod batch_tests {
    use super::*;
    use crate::runtime;
    use crate::testing::trace::{new_test_export_span_data, new_tokio_test_exporter};
    use crate::trace::{BatchConfigBuilder, InMemorySpanExporterBuilder};
    use futures_util::Future;
    use opentelemetry::KeyValue;
    use std::sync::Mutex;

    // Mock exporter to test functionality
    #[derive(Debug)]
    struct MockSpanExporter {
        exported_spans: Arc<Mutex<Vec<SpanData>>>,
        exported_resource: Arc<Mutex<Option<Resource>>>,
    }

    impl MockSpanExporter {
        fn new() -> Self {
            Self {
                exported_spans: Arc::new(Mutex::new(Vec::new())),
                exported_resource: Arc::new(Mutex::new(None)),
            }
        }
    }

    impl SpanExporter for MockSpanExporter {
        async fn export(&self, batch: Vec<SpanData>) -> OTelSdkResult {
            let exported_spans = self.exported_spans.clone();
            exported_spans.lock().unwrap().extend(batch);
            Ok(())
        }

        fn set_resource(&mut self, resource: &Resource) {
            let mut exported_resource = self.exported_resource.lock().unwrap();
            *exported_resource = Some(resource.clone());
        }
    }

    struct BlockingExporter<D> {
        delay_for: Duration,
        delay_fn: D,
    }

    impl<D, DS> std::fmt::Debug for BlockingExporter<D>
    where
        D: Fn(Duration) -> DS + 'static + Send + Sync,
        DS: Future<Output = ()> + Send + Sync + 'static,
    {
        fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
            f.write_str("blocking exporter for testing")
        }
    }

    impl<D, DS> SpanExporter for BlockingExporter<D>
    where
        D: Fn(Duration) -> DS + 'static + Send + Sync,
        DS: Future<Output = ()> + Send + Sync + 'static,
    {
        async fn export(&self, _batch: Vec<SpanData>) -> OTelSdkResult {
            (self.delay_fn)(self.delay_for).await;
            Ok(())
        }
    }

    #[test]
    fn test_build_batch_span_processor_builder() {
        use crate::trace::span_processor::{
            OTEL_BSP_EXPORT_TIMEOUT, OTEL_BSP_MAX_EXPORT_BATCH_SIZE, OTEL_BSP_MAX_QUEUE_SIZE,
            OTEL_BSP_MAX_QUEUE_SIZE_DEFAULT, OTEL_BSP_SCHEDULE_DELAY,
            OTEL_BSP_SCHEDULE_DELAY_DEFAULT,
        };

        let mut env_vars = vec![
            (OTEL_BSP_MAX_EXPORT_BATCH_SIZE, Some("500")),
            (OTEL_BSP_SCHEDULE_DELAY, Some("I am not number")),
            (OTEL_BSP_EXPORT_TIMEOUT, Some("2046")),
        ];
        temp_env::with_vars(env_vars.clone(), || {
            let builder = BatchSpanProcessor::builder_with_runtime(
                InMemorySpanExporterBuilder::new().build(),
                runtime::Tokio,
            );
            // export batch size cannot exceed max queue size
            assert_eq!(builder.config.max_export_batch_size, 500);
            assert_eq!(
                builder.config.scheduled_delay,
                OTEL_BSP_SCHEDULE_DELAY_DEFAULT
            );
            assert_eq!(
                builder.config.max_queue_size,
                OTEL_BSP_MAX_QUEUE_SIZE_DEFAULT
            );
            assert_eq!(
                builder.config.max_export_timeout,
                Duration::from_millis(2046)
            );
        });

        env_vars.push((OTEL_BSP_MAX_QUEUE_SIZE, Some("120")));

        temp_env::with_vars(env_vars, || {
            let builder = BatchSpanProcessor::builder_with_runtime(
                InMemorySpanExporterBuilder::new().build(),
                runtime::Tokio,
            );
            assert_eq!(builder.config.max_export_batch_size, 120);
            assert_eq!(builder.config.max_queue_size, 120);
        });
    }

    #[tokio::test]
    async fn test_batch_span_processor() {
        let (exporter, mut export_receiver, _shutdown_receiver) = new_tokio_test_exporter();
        let config = BatchConfigBuilder::default()
            .with_scheduled_delay(Duration::from_secs(60 * 60 * 24)) // set the tick to 24 hours so we know the span must be exported via force_flush
            .build();
        let processor = BatchSpanProcessor::new(exporter, config, runtime::TokioCurrentThread);
        let handle = tokio::spawn(async move {
            loop {
                if let Some(span) = export_receiver.recv().await {
                    assert_eq!(span.span_context, new_test_export_span_data().span_context);
                    break;
                }
            }
        });
        tokio::time::sleep(Duration::from_secs(1)).await; // skip the first
        processor.on_end(new_test_export_span_data());
        let flush_res = processor.force_flush();
        assert!(flush_res.is_ok());
        let _shutdown_result = processor.shutdown();

        assert!(
            tokio::time::timeout(Duration::from_secs(5), handle)
                .await
                .is_ok(),
            "timed out in 5 seconds. force_flush may not export any data when called"
        );
    }

    // If `time_out` is `true`, then the export should fail with a timeout.
    // Else, the exporter should be able to export within the timeout duration.
    async fn timeout_test_tokio(time_out: bool) {
        let config = BatchConfig {
            max_export_timeout: Duration::from_millis(if time_out { 5 } else { 60 }),
            scheduled_delay: Duration::from_secs(60 * 60 * 24), // set the tick to 24 hours so we know the span must be exported via force_flush,
            ..Default::default()
        };
        let exporter = BlockingExporter {
            delay_for: Duration::from_millis(if !time_out { 5 } else { 60 }),
            delay_fn: tokio::time::sleep,
        };
        let processor = BatchSpanProcessor::new(exporter, config, runtime::TokioCurrentThread);
        tokio::time::sleep(Duration::from_secs(1)).await; // skip the first
        processor.on_end(new_test_export_span_data());
        let flush_res = processor.force_flush();
        if time_out {
            assert!(flush_res.is_err());
        } else {
            assert!(flush_res.is_ok());
        }
        let shutdown_res = processor.shutdown();
        assert!(shutdown_res.is_ok());
    }

    #[tokio::test(flavor = "multi_thread")]
    async fn test_timeout_tokio_timeout() {
        // If time_out is true, then we ask exporter to block for 60s and set timeout to 5s.
        // If time_out is false, then we ask the exporter to block for 5s and set timeout to 60s.
        // Either way, the test should be finished within 5s.
        timeout_test_tokio(true).await;
    }

    #[tokio::test(flavor = "multi_thread")]
    async fn test_timeout_tokio_not_timeout() {
        timeout_test_tokio(false).await;
    }

    #[tokio::test(flavor = "multi_thread", worker_threads = 4)]
    async fn test_batch_processor_multi_thread() {
        let exporter = MockSpanExporter::new();
        let exporter_shared = exporter.exported_spans.clone();

        let config = BatchConfigBuilder::default()
            .with_max_queue_size(20)
            .with_max_export_batch_size(5)
            .build();

        // Create the processor with the thread-safe exporter
        let processor = Arc::new(BatchSpanProcessor::new(exporter, config, runtime::Tokio));

        let mut handles = vec![];
        for _ in 0..10 {
            let processor_clone = Arc::clone(&processor);
            let handle = tokio::spawn(async move {
                let span = new_test_export_span_data();
                processor_clone.on_end(span);
            });
            handles.push(handle);
        }

        for handle in handles {
            handle.await.unwrap();
        }

        processor.force_flush().unwrap();

        // Verify exported spans
        let exported_spans = exporter_shared.lock().unwrap();
        assert_eq!(exported_spans.len(), 10);
    }

    #[tokio::test(flavor = "multi_thread")]
    async fn batchspanprocessor_force_flush() {
        let exporter = MockSpanExporter::new();
        let exporter_shared = exporter.exported_spans.clone();
        let config = BatchConfigBuilder::default()
            .with_max_queue_size(10)
            .with_max_export_batch_size(10)
            .with_scheduled_delay(Duration::from_secs(5))
            .build();
        let processor = BatchSpanProcessor::new(exporter, config, runtime::Tokio);

        // Create a test span (must be sampled) and send it to the processor
        processor.on_end(new_test_export_span_data());

        // Call force_flush to immediately export the spans
        let flush_result = processor.force_flush();
        assert!(flush_result.is_ok(), "Force flush failed unexpectedly");

        // Verify the exported spans in the mock exporter
        let exported_spans = exporter_shared.lock().unwrap();
        assert_eq!(
            exported_spans.len(),
            1,
            "Unexpected number of exported spans"
        );
    }

    #[tokio::test(flavor = "multi_thread")]
    async fn batchspanprocessor_shutdown() {
        let exporter = InMemorySpanExporterBuilder::new()
            .keep_records_on_shutdown()
            .build();
        let processor =
            BatchSpanProcessor::new(exporter.clone(), BatchConfig::default(), runtime::Tokio);

        // Must use sampled span for BatchSpanProcessor to accept it
        processor.on_end(new_test_export_span_data());
        processor.force_flush().unwrap();
        processor.shutdown().unwrap();

        assert_eq!(1, exporter.get_finished_spans().unwrap().len());
        assert!(exporter.is_shutdown_called());
    }

    #[tokio::test(flavor = "multi_thread")]
    async fn validate_span_attributes_exported_correctly() {
        let exporter = MockSpanExporter::new();
        let exporter_shared = exporter.exported_spans.clone();
        let config = BatchConfigBuilder::default().build();
        let processor = BatchSpanProcessor::new(exporter, config, runtime::Tokio);

        // Create a sampled span with attributes
        let mut span_data = new_test_export_span_data();
        span_data.attributes = vec![
            KeyValue::new("key1", "value1"),
            KeyValue::new("key2", "value2"),
        ];
        processor.on_end(span_data.clone());

        // Force flush to export the span
        let _ = processor.force_flush();

        // Validate the exported attributes
        let exported_spans = exporter_shared.lock().unwrap();
        assert_eq!(exported_spans.len(), 1);
        let exported_span = &exported_spans[0];
        assert!(exported_span
            .attributes
            .contains(&KeyValue::new("key1", "value1")));
        assert!(exported_span
            .attributes
            .contains(&KeyValue::new("key2", "value2")));
    }

    #[tokio::test(flavor = "multi_thread")]
    async fn batchspanprocessor_sets_and_exports_with_resource() {
        use opentelemetry::{Key, Value};

        let exporter = MockSpanExporter::new();
        let exporter_shared = exporter.exported_spans.clone();
        let resource_shared = exporter.exported_resource.clone();
        let config = BatchConfigBuilder::default().build();
        let mut processor = BatchSpanProcessor::new(exporter, config, runtime::Tokio);

        // Set a resource for the processor
        let resource = Resource::new(vec![KeyValue::new("service.name", "test_service")]);
        processor.set_resource(&resource);

        // Create a sampled span and send it to the processor
        processor.on_end(new_test_export_span_data());

        // Force flush to ensure the span is exported
        let _ = processor.force_flush();

        // Validate spans are exported
        let exported_spans = exporter_shared.lock().unwrap();
        assert_eq!(exported_spans.len(), 1);

        // Validate the resource is correctly set in the exporter
        let exported_resource = resource_shared.lock().unwrap();
        assert!(exported_resource.is_some());
        assert_eq!(
            exported_resource
                .as_ref()
                .unwrap()
                .get(&Key::new("service.name")),
            Some(Value::from("test_service"))
        );
    }
}
