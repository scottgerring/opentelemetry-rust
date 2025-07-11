# OpenTelemetry Rust – Architecture Overview

## 1 Purpose
This document provides a stable, high-level description of how the OpenTelemetry **Rust** implementation is structured across all telemetry **signals** (traces, metrics, logs).  Detailed per-signal design notes live in their own files; this overview ties the pieces together.

## 2 Layered Model
```mermaid
graph TD
    A[Application code] --> B[`opentelemetry` API]
    B --> C[`opentelemetry-sdk` core]
    C --> D[Processors / Readers]
    D --> E[Exporters]
    E -->|"protocols (OTLP, Jaeger, Zipkin, Prometheus, stdout)"| F[Back-end / Collector]
```
Key points:
1. The **API** crates are dependency-free facades that applications instrument against.
2. The **SDK** crate supplies concrete implementations, batching, aggregation, and lifecycle management.
3. **Processors / readers** sit between SDK and exporters to adapt buffering, temporality, and semantics.
4. **Exporters** translate OTel data into wire formats (OTLP, Prometheus, etc.) and handle transport.

## 3 Cross-cutting Components
• **Resource & Attributes** – common schema for describing the process, host, service, etc.  Shared by all signals.<br/>
• **Context & Propagation** – `Context` carries span context and baggage; propagators live in `opentelemetry::propagation`.<br/>
• **Runtime model** – most public APIs are **async-agnostic**; heavy I/O lives behind optional tokio-based exporters.<br/>
• **Error taxonomy** – SDK wraps exporter/processor errors in `OTelError`; non-fatal failures are surfaced for back-pressure or log-only handling.

## 4 Signals at a Glance
* **Traces** – [design doc](./traces.md) · [Spec](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/trace/README.md) — trees of _spans_ capturing distributed work.
* **Metrics** – [design doc](./metrics.md) · [Spec](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/README.md) — numerical time-series data.
* **Logs** – [design doc](./logs.md) · [Spec](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/logs/README.md) — timestamped events likely bridged from existing logging frameworks (`log`, `tracing`).

## 5 Extensibility Hooks
| Layer | Customise via |
|-------|--------------|
| API   | Implement alternative `TracerProvider`, `MeterProvider`, `LoggerProvider` |
| SDK   | Pluggable **samplers**, **metric readers**, **log processors** |

