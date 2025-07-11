# OpenTelemetry-OTLP Architecture Review

This document focusses on the current state of the OTLP susystem, and is based on high-level review against the spec and by hand.

For an architectural overview, see [`docs/design/otlp.md`](../docs/design/otlp.md).

## 11. Observations

### A. Code Review Findings

| Rank | Topic | Observation | Possible Follow-up | Importance | Code |
|-----:|-------|-------------|--------------------|------------|------|
| 1 | Concurrency limits | No bounding of in-flight HTTP requests; high-throughput apps may self-DOS. | Add semaphore/tower layer; expose `with_max_in_flight(n)`. | High | [exporter/http/mod.rs](https://github.com/open-telemetry/opentelemetry-rust/blob/main/opentelemetry-otlp/src/exporter/http/mod.rs) |
| 2 | Sync vs async HTTP default | Blocking client built on a **helper thread** (see [PR #2431](https://github.com/open-telemetry/opentelemetry-rust/pull/2431)) to avoid panics when `tokio::main` is active (issue [#2400](https://github.com/open-telemetry/opentelemetry-rust/issues/2400)). Still incurs blocking I/O on caller thread. | Make async client default or detect runtime; or move blocking client onto dedicated worker thread pool. | Medium | [exporter/http/mod.rs#L145-L165](https://github.com/open-telemetry/opentelemetry-rust/blob/main/opentelemetry-otlp/src/exporter/http/mod.rs#L145-L165) |
| 3 | Error taxonomy / partial-success surfacing | Runtime errors flattened; cannot distinguish retryable vs permanent. | Introduce `ExporterStatus` & surface `partial_success` info. | High | [exporter/mod.rs](https://github.com/open-telemetry/opentelemetry-rust/blob/main/opentelemetry-otlp/src/exporter/mod.rs) |
| 4 | Logs exporter lacks batching | `LogExporter` is synchronous; risks back-pressure. | Implement `BatchLogProcessor` mirroring spans. | High | [logs.rs](https://github.com/open-telemetry/opentelemetry-rust/blob/main/opentelemetry-otlp/src/logs.rs) |
| 5 | Protocol enum ambiguity | Passing wrong protocol is silently ignored. | Emit builder error or support dual-protocol fallback. | Medium-High | [lib.rs](https://github.com/open-telemetry/opentelemetry-rust/blob/main/opentelemetry-otlp/src/lib.rs) |
| 6 | Compression coverage | HTTP path lacks zstd support. | Add `zstd-http` feature. | Medium | [exporter/http/mod.rs](https://github.com/open-telemetry/opentelemetry-rust/blob/main/opentelemetry-otlp/src/exporter/http/mod.rs) |
| 7 | Metrics temporality API | Only cumulative documented; delta hidden. | Expose `with_temporality`; align with SDK selector. | Medium | [metric.rs](https://github.com/open-telemetry/opentelemetry-rust/blob/main/opentelemetry-otlp/src/metric.rs) |
| 8 | Builder / trait boilerplate | Repetitive impls across signals. | Create `derive(ExporterBuilder)` proc-macro. | Low-Medium | [span.rs](https://github.com/open-telemetry/opentelemetry-rust/blob/main/opentelemetry-otlp/src/span.rs) |
| 9 | Env-var parsing util duplication | Header-parsing duplicated across crates. | Move to shared util module. | Low | [exporter/mod.rs](https://github.com/open-telemetry/opentelemetry-rust/blob/main/opentelemetry-otlp/src/exporter/mod.rs) |
| 10 | Code size of tonic deps | `tonic` pulled even when unused due to default features. | Split sub-crate or adjust default-features. | Low | [Cargo.toml](https://github.com/open-telemetry/opentelemetry-rust/blob/main/opentelemetry-otlp/Cargo.toml) |
| 11 | MetricExporter deadlock ([#2802](https://github.com/open-telemetry/opentelemetry-rust/issues/2802)) | Uses `std::Mutex` across `.await`, can deadlock under load. | Swap to `tokio::Mutex` or lock-free pattern. | High | [exporter/tonic/metrics.rs](https://github.com/open-telemetry/opentelemetry-rust/blob/main/opentelemetry-otlp/src/exporter/tonic/metrics.rs) |
| 12 | Async interceptor support ([#2881](https://github.com/open-telemetry/opentelemetry-rust/issues/2881)) | gRPC auth requires async metadata injection; current API is sync-only. | Add `with_async_interceptor()` backed by tower layer. | Medium | [exporter/tonic/mod.rs](https://github.com/open-telemetry/opentelemetry-rust/blob/main/opentelemetry-otlp/src/exporter/tonic/mod.rs) |
| 13 | Telemetry-induces-telemetry loop ([#2877](https://github.com/open-telemetry/opentelemetry-rust/issues/2877)) | Exporter network calls generate spans that feed back into exporter. | Suppress internal spans or use dedicated noop provider inside exporters. | Medium | [exporter/http/](https://github.com/open-telemetry/opentelemetry-rust/blob/main/opentelemetry-otlp/src/exporter/http/) |
| 14 | Graceful gRPC shutdown ([#2777](https://github.com/open-telemetry/opentelemetry-rust/issues/2777)) | `shutdown()` leaves tonic channels open. | Expose explicit `close()` or drop channel on shutdown. | High | [exporter/tonic/mod.rs](https://github.com/open-telemetry/opentelemetry-rust/blob/main/opentelemetry-otlp/src/exporter/tonic/mod.rs) |
| 15 | OTLP File Exporter missing ([#2602](https://github.com/open-telemetry/opentelemetry-rust/issues/2602)) | No implementation for JSON-lines file exporter per spec. | Introduce `FileExporter` crate / feature. | Medium | — |
| 16 | Builder side-effects ([#1592](https://github.com/open-telemetry/opentelemetry-rust/issues/1592)) | `install_batch` sets global tracer provider, hard-coded scope name. | Refactor builder API to avoid implicit globals. | Low-Medium | [span.rs](https://github.com/open-telemetry/opentelemetry-rust/blob/main/opentelemetry-otlp/src/span.rs) |

