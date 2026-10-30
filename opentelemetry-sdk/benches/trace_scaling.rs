use opentelemetry::trace::{Span as _, Tracer, TracerProvider};
use opentelemetry_sdk::trace::{Sampler, SdkTracer, SdkTracerProvider};
use std::sync::atomic::{AtomicBool, Ordering};
use std::sync::Barrier;
use std::time::{Duration, Instant, SystemTime};

fn measure(tracer: &SdkTracer, workers: usize, duration: Duration) -> f64 {
    let start = Barrier::new(workers + 1);
    let stop = AtomicBool::new(false);

    let (total, elapsed) = std::thread::scope(|scope| {
        let handles: Vec<_> = (0..workers)
            .map(|_| {
                scope.spawn(|| {
                    let mut spans = 0_u64;
                    start.wait();
                    while !stop.load(Ordering::Relaxed) {
                        let mut span = tracer
                            .span_builder("trace-scaling")
                            .with_start_time(SystemTime::UNIX_EPOCH)
                            .start(tracer);
                        span.end_with_timestamp(SystemTime::UNIX_EPOCH);
                        spans += 1;
                    }
                    spans
                })
            })
            .collect();

        start.wait();
        let started_at = Instant::now();
        std::thread::sleep(duration);
        stop.store(true, Ordering::Relaxed);
        let total = handles
            .into_iter()
            .map(|handle| handle.join().expect("worker panicked"))
            .sum::<u64>();
        (total, started_at.elapsed())
    });

    total as f64 / elapsed.as_secs_f64()
}

fn main() {
    let duration = Duration::from_millis(
        std::env::var("OTEL_TRACE_SCALING_DURATION_MS")
            .ok()
            .and_then(|value| value.parse().ok())
            .unwrap_or(2_000),
    );
    let repeats = std::env::var("OTEL_TRACE_SCALING_REPEATS")
        .ok()
        .and_then(|value| value.parse().ok())
        .unwrap_or(3);
    let max_workers = std::thread::available_parallelism()
        .map(|parallelism| parallelism.get())
        .unwrap_or(1);

    let provider = SdkTracerProvider::builder()
        .with_sampler(Sampler::AlwaysOn)
        .build();
    let tracer = provider.tracer("trace-scaling");
    let mut baseline = None;

    println!("workers\tspans/s\tspeedup");
    for workers in [1, 2, 4, 8]
        .into_iter()
        .filter(|workers| *workers <= max_workers)
    {
        let mut rates = (0..repeats)
            .map(|_| measure(&tracer, workers, duration))
            .collect::<Vec<_>>();
        rates.sort_by(f64::total_cmp);
        let rate = rates[rates.len() / 2];
        let baseline = *baseline.get_or_insert(rate);
        println!("{workers}\t{rate:.0}\t{:.2}x", rate / baseline);
    }
}
