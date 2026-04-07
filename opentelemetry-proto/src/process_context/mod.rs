//! Process context sharing via memory-mapped regions.
//!
//! Implements [OTEP-4719]: publishing SDK resource attributes to a named
//! memory mapping so external readers (e.g. the OpenTelemetry eBPF Profiler)
//! can discover them without direct integration.
//!
//! The process context is a singleton — only one may be active per process.
//!
//! This module is Linux-only. On other platforms, [`publish`] and [`unpublish`]
//! are no-ops.
//!
//! [OTEP-4719]: https://github.com/open-telemetry/oteps/pull/4719

#[cfg(all(target_os = "linux", target_has_atomic = "64"))]
mod linux;

use opentelemetry_sdk::Resource;
use prost::Message;

use crate::tonic::process_context::v1::ProcessContext;
use crate::tonic::resource::v1::Resource as ProtoResource;
use crate::transform::common::tonic::Attributes;

/// Convert an SDK [`Resource`] into a proto [`ProcessContext`] message.
fn resource_to_process_context(resource: &Resource) -> ProcessContext {
    let attributes: Attributes = resource
        .iter()
        .map(|(k, v)| opentelemetry::KeyValue::new(k.clone(), v.clone()))
        .collect::<Vec<_>>()
        .into();

    ProcessContext {
        resource: Some(ProtoResource {
            attributes: attributes.0,
            dropped_attributes_count: 0,
            entity_refs: vec![],
        }),
        extra_attributes: vec![],
    }
}

/// Publish the given [`Resource`] as the process context.
///
/// On Linux, this creates (or updates) a named memory mapping containing
/// a protobuf-serialized representation of the resource attributes, making
/// it discoverable by external readers such as the OpenTelemetry eBPF Profiler.
///
/// On non-Linux platforms, this is a no-op.
///
/// # Example
///
/// ```no_run
/// use opentelemetry_sdk::Resource;
///
/// let resource = Resource::builder()
///     .with_service_name("my-service")
///     .build();
///
/// opentelemetry_proto::process_context::publish(&resource);
/// ```
pub fn publish(resource: &Resource) {
    let proto_ctx = resource_to_process_context(resource);
    let payload = proto_ctx.encode_to_vec();

    #[cfg(all(target_os = "linux", target_has_atomic = "64"))]
    {
        if let Err(e) = linux::publish_raw_payload(payload) {
            opentelemetry::otel_warn!(
                name: "process_context.publish.failed",
                message = format!("{e}")
            );
        }
    }

    #[cfg(not(all(target_os = "linux", target_has_atomic = "64")))]
    {
        let _ = payload;
    }
}

/// Unpublish the process context, unmapping the shared memory region.
///
/// On non-Linux platforms, this is a no-op.
pub fn unpublish() {
    #[cfg(all(target_os = "linux", target_has_atomic = "64"))]
    {
        if let Err(e) = linux::unpublish() {
            opentelemetry::otel_warn!(
                name: "process_context.unpublish.failed",
                message = format!("{e}")
            );
        }
    }
}
