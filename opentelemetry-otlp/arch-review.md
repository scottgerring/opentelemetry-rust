# OpenTelemetry-OTLP Architecture Review

This document focusses on the current state of the OTLP susystem, and is based on high-level review against the spec and by hand.

For an architectural overview, see [`docs/design/otlp.md`](../docs/design/otlp.md).

## 11. Observations

### A. Code Review Findings

| Rank | Topic | Observation | Possible Follow-up | Importance | Code |
|-----:|-------|-------------|--------------------|------------|------|
| 1 | Concurrency limits | No bounding of in-flight HTTP requests; high-throughput apps may self-DOS. | Add semaphore/tower layer; expose `with_max_in_flight(n)`. | High | [exporter/http/mod.rs](./src/exporter/http/mod.rs) |
| 2 | Sync vs async HTTP default | Blocking client built on a **helper thread** (see [PR #2431](https://github.com/open-telemetry/opentelemetry-rust/pull/2431)) to avoid panics when `tokio::main` is active (issue [#2400](https://github.com/open-telemetry/opentelemetry-rust/issues/2400)). Still incurs blocking I/O on caller thread. | Make async client default or detect runtime; or move blocking client onto dedicated worker thread pool. | Medium | [exporter/http/mod.rs#L145-L165](./src/exporter/http/mod.rs) |
| 3 | Error taxonomy / partial-success surfacing | Runtime errors flattened; cannot distinguish retryable vs permanent. | Introduce `ExporterStatus` & surface `partial_success` info. | High | [exporter/mod.rs](./src/exporter/mod.rs) |
| 4 | Logs exporter lacks batching | `LogExporter` is synchronous; risks back-pressure. | Implement `BatchLogProcessor` mirroring spans. | High | [logs.rs](./src/logs.rs) |
| 5 | Protocol enum ambiguity | Passing wrong protocol is silently ignored. | Emit builder error or support dual-protocol fallback. | Medium-High | [lib.rs](./src/lib.rs) |
| 6 | Compression coverage | HTTP path lacks zstd support. | Add `zstd-http` feature. | Medium | [exporter/http/mod.rs](./src/exporter/http/mod.rs) |
| 7 | Metrics temporality API | Only cumulative documented; delta hidden. | Expose `with_temporality`; align with SDK selector. | Medium | [metric.rs](./src/metric.rs) |
| 8 | Builder / trait boilerplate | Repetitive impls across signals. | Create `derive(ExporterBuilder)` proc-macro. | Low-Medium | [span.rs](./src/span.rs) |
| 9 | Env-var parsing util duplication | Header-parsing duplicated across crates. | Move to shared util module. | Low | [exporter/mod.rs](./src/exporter/mod.rs) |
| 10 | Code size of tonic deps | `tonic` pulled even when unused due to default features. | Split sub-crate or adjust default-features. | Low | [Cargo.toml](./Cargo.toml) |
| 11 | MetricExporter deadlock ([#2802](https://github.com/open-telemetry/opentelemetry-rust/issues/2802)) | Uses `std::Mutex` across `.await`, can deadlock under load. | Swap to `tokio::Mutex` or lock-free pattern. | High | [exporter/tonic/metrics.rs](./src/exporter/tonic/metrics.rs) |
| 12 | Async interceptor support ([#2881](https://github.com/open-telemetry/opentelemetry-rust/issues/2881)) | gRPC auth requires async metadata injection; current API is sync-only. | Add `with_async_interceptor()` backed by tower layer. | Medium | [exporter/tonic/mod.rs](./src/exporter/tonic/mod.rs) |
| 13 | Telemetry-induces-telemetry loop ([#2877](https://github.com/open-telemetry/opentelemetry-rust/issues/2877)) | Exporter network calls generate spans that feed back into exporter. | Suppress internal spans or use dedicated noop provider inside exporters. | Medium | [exporter/http/](./src/exporter/http) |
| 14 | Graceful gRPC shutdown ([#2777](https://github.com/open-telemetry/opentelemetry-rust/issues/2777)) | `shutdown()` leaves tonic channels open. | Expose explicit `close()` or drop channel on shutdown. | High | [exporter/tonic/mod.rs](./src/exporter/tonic/mod.rs) |
| 15 | OTLP File Exporter missing ([#2602](https://github.com/open-telemetry/opentelemetry-rust/issues/2602)) | No implementation for JSON-lines file exporter per spec. | Introduce `FileExporter` crate / feature. | Medium | — |
| 16 | Builder side-effects ([#1592](https://github.com/open-telemetry/opentelemetry-rust/issues/1592)) | `install_batch` sets global tracer provider, hard-coded scope name. | Refactor builder API to avoid implicit globals. | Low-Medium | [span.rs](./src/span.rs) |

### B. OTLP-spec compliance review

| Rank | Spec Requirement (section) | Current Status | Action | Importance | Code | Spec |
|-----:|---------------------------|---------------|--------|------------|------|------|
| 1 | **MUST**: Exporters respect `RetryInfo` / `Retry-After` (Retry) | gRPC & HTTP ignore retry mechanisms. | Implement exponential back-off based on metadata / header. | High | [exporter/tonic/mod.rs](./src/exporter/tonic/mod.rs) / [exporter/http/mod.rs](./src/exporter/http/mod.rs) | <https://opentelemetry.io/docs/specs/otel/protocol/exporter/#retry> |
| 2 | **MUST**: Logs `SeverityNumber` 1-24 mapping | Exporter doesn’t validate; may emit invalid values. | Clamp/convert values before serialize. | High | [logs.rs](./src/logs.rs) | <https://opentelemetry.io/docs/specs/otel/logs/data-model/#field-severitynumber> |
| 3 | **MUST**: Support `ExponentialHistogram` & `Summary` datapoints | Not implemented. | Generate prost types & converters. | Medium-High | [metric.rs](./src/metric.rs) | <https://opentelemetry.io/docs/specs/otel/metrics/data-model/#exponentialhistogram> |
| 4 | **SHOULD**: Support gzip **and** zstd compression | HTTP path lacks zstd support. | Implement zstd for HTTP. | Medium | [exporter/http/mod.rs](./src/exporter/http/mod.rs) | <https://opentelemetry.io/docs/specs/otel/protocol/exporter/#compression> |
| 5 | **SHOULD**: Partial success body SHOULD be logged / propagated | HTTP discards, gRPC only logs. | Bubble up info via `ExporterStatus`. | Medium | [exporter/tonic/mod.rs](./src/exporter/tonic/mod.rs) | <https://opentelemetry.io/docs/specs/otlp/#partial-success> |
| 6 | **SHOULD**: System & Mozilla CA bundles available (TLS) | Features exist but off by default. | Document or enable one by default. | Low-Medium | [exporter/tonic/mod.rs](./src/exporter/tonic/mod.rs) | <https://opentelemetry.io/docs/specs/otel/protocol/exporter/#certificate-file> |
| 7 | *Draft*: TraceID 128-bit truncation rules | Not yet applicable. | Track spec evolution. | Low | — | — |

> Importance levels derive from the spec’s terminology (MUST > SHOULD > MAY) plus expected production impact for internal items.



## 12. Open Issues & PRs related to OTLP as of 2025-07-10

Below is a non-exhaustive list of **open** tickets in the repo that explicitly reference OTLP.

### 12.1 Issues (latest updated first)
| # | Title (abridged) | Updated | Area |
|---|------------------|---------|-------|
| [#3045](https://github.com/open-telemetry/opentelemetry-rust/issues/3045) | Simplify `opentelemetry-proto` (SDK decoupling, gRPC separation) | 2025-06-30 | Architecture |
| [#2881](https://github.com/open-telemetry/opentelemetry-rust/issues/2881) | Allow **async interceptors** for OTLP gRPC exporter | 2025-06-17 | Extensibility |
| [#2802](https://github.com/open-telemetry/opentelemetry-rust/issues/2802) | OTLP `MetricExporter` deadlock | 2025-05-19 | Metrics / runtime |
| [#1987](https://github.com/open-telemetry/opentelemetry-rust/issues/1987) | Broken-pipe errors when exporting via OTLP | 2025-03-31 | Stability |
| [#2877](https://github.com/open-telemetry/opentelemetry-rust/issues/2877) | Prevent *telemetry-induced telemetry* in OTLP exporter | 2025-03-27 | Performance |
| [#2777](https://github.com/open-telemetry/opentelemetry-rust/issues/2777) | Handle **shutdown** in OTLP/gRPC | 2025-03-11 | Lifecycle |
| [#2602](https://github.com/open-telemetry/opentelemetry-rust/issues/2602) | OTLP **File Exporter** | 2025-02-27 | Feature request |
| [#1592](https://github.com/open-telemetry/opentelemetry-rust/issues/1592) | OTLP Exporter **builder** ergonomics | 2024-12-14 | API |

### 12.2 PRs (latest updated first)
| # | Title | Updated | Purpose |
|---|-------|---------|---------|
| [PR #3046](https://github.com/open-telemetry/opentelemetry-rust/pull/3046) | SDK decoupling & gRPC separation | 2025-07-06 | Follow-up to issue #3045 |
| [PR #2812](https://github.com/open-telemetry/opentelemetry-rust/pull/2812) | Add **shutdown** for spans | 2025-07-04 | Lifecycle correctness |
| [PR #2727](https://github.com/open-telemetry/opentelemetry-rust/pull/2727) | **Add Retry** to OTLP exporter | 2025-06-25 | Spec compliance (RetryInfo) |
| [PR #3003](https://github.com/open-telemetry/opentelemetry-rust/pull/3003) | Guard against enabling multiple HTTP features | 2025-05-27 | Build-time safety |
| [PR #2465](https://github.com/open-telemetry/opentelemetry-rust/pull/2465) | Configure **TLS via env vars** | 2025-04-09 | Ease of use |
| [PR #2491](https://github.com/open-telemetry/opentelemetry-rust/pull/2491) | Fix (un)serialize edge-cases in metrics | 2025-03-17 | Data model |
| [PR #2524](https://github.com/open-telemetry/opentelemetry-rust/pull/2524) | OTLP **support matrix** doc | 2025-03-06 | Documentation |
| [PR #2758](https://github.com/open-telemetry/opentelemetry-rust/pull/2758) | Implement `FromStr`/`Display` for `Protocol` | 2025-03-06 | API polish |

