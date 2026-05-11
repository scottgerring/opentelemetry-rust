window.BENCHMARK_DATA = {
  "lastUpdate": 1778484865312,
  "repoUrl": "https://github.com/scottgerring/opentelemetry-rust",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "scott@scottgerring.com",
            "name": "Scott Gerring",
            "username": "scottgerring"
          },
          "committer": {
            "email": "scott@scottgerring.com",
            "name": "Scott Gerring",
            "username": "scottgerring"
          },
          "distinct": true,
          "id": "bb66875530521310a1f79d1f869a5971637914bb",
          "message": "ci: add continuous benchmark tracking with github-action-benchmark",
          "timestamp": "2026-03-05T08:32:52+01:00",
          "tree_id": "60eb03819af1eeac319af52175c69b06c6469e68",
          "url": "https://github.com/scottgerring/opentelemetry-rust/commit/bb66875530521310a1f79d1f869a5971637914bb"
        },
        "date": 1772696634618,
        "tool": "cargo",
        "benches": [
          {
            "name": "CreateOTelKey_Static",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelKey_Owned",
            "value": 14,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelKey_Arc",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelKeyValue",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateTupleKeyValue",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOtelKeyValueArray",
            "value": 13,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOtelKeyValueArrayWithMixedValueTypes",
            "value": 11,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOtelKeyValueArrayWithNonStaticValues",
            "value": 97,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateTupleKeyValueArray",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "scott@scottgerring.com",
            "name": "Scott Gerring",
            "username": "scottgerring"
          },
          "committer": {
            "email": "scott@scottgerring.com",
            "name": "Scott Gerring",
            "username": "scottgerring"
          },
          "distinct": true,
          "id": "25d4fc005ed4894e3ad1282fd29eaaca6960762c",
          "message": "ci: add continuous benchmark tracking with github-action-benchmark\n\nAdd a new continuousBenchmark job that runs on every push to main,\nstores Criterion results in gh-pages, and publishes a dashboard.\nAlso mention the benchmark dashboard in CONTRIBUTING.md.",
          "timestamp": "2026-03-05T08:47:15+01:00",
          "tree_id": "d08d613703adf3986573593fde4150e824057139",
          "url": "https://github.com/scottgerring/opentelemetry-rust/commit/25d4fc005ed4894e3ad1282fd29eaaca6960762c"
        },
        "date": 1772696966684,
        "tool": "cargo",
        "benches": [
          {
            "name": "CreateOTelKey_Static",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelKey_Owned",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelKey_Arc",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelKeyValue",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateTupleKeyValue",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOtelKeyValueArray",
            "value": 13,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOtelKeyValueArrayWithMixedValueTypes",
            "value": 11,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOtelKeyValueArrayWithNonStaticValues",
            "value": 102,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateTupleKeyValueArray",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "scott@scottgerring.com",
            "name": "Scott Gerring",
            "username": "scottgerring"
          },
          "committer": {
            "email": "scott@scottgerring.com",
            "name": "Scott Gerring",
            "username": "scottgerring"
          },
          "distinct": true,
          "id": "058a1adf08ce43a52ce7e6b1b74093ea77fb044f",
          "message": "ci: add continuous benchmark tracking with github-action-benchmark\n\nAdd a new continuousBenchmark job that runs on every push to main,\nstores Criterion results in gh-pages, and publishes a dashboard.\nAlso mention the benchmark dashboard in CONTRIBUTING.md.",
          "timestamp": "2026-03-05T08:56:28+01:00",
          "tree_id": "3632b2c7c8f0375cfd419778b3cbcff86eb897c0",
          "url": "https://github.com/scottgerring/opentelemetry-rust/commit/058a1adf08ce43a52ce7e6b1b74093ea77fb044f"
        },
        "date": 1772698619023,
        "tool": "cargo",
        "benches": [
          {
            "name": "CreateOTelValueString",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelAnyValueString",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelValueInt",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelAnyValueInt",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelKey_Static",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelKey_Owned",
            "value": 14,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelKey_Arc",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelKeyValue",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateTupleKeyValue",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOtelKeyValueArray",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOtelKeyValueArrayWithMixedValueTypes",
            "value": 11,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOtelKeyValueArrayWithNonStaticValues",
            "value": 97,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateTupleKeyValueArray",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "set_baggage_static_key_value",
            "value": 29,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "set_baggage_static_key",
            "value": 51,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "set_baggage_dynamic",
            "value": 69,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "set_baggage_dynamic_with_metadata",
            "value": 101,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/single_cx/empty_cx",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/nested_cx/empty_cx",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/out_of_order_cx_drop/empty_cx",
            "value": 35,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/single_cx/single_value_cx",
            "value": 21,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/nested_cx/single_value_cx",
            "value": 41,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/out_of_order_cx_drop/single_value_cx",
            "value": 41,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/single_cx/span_cx",
            "value": 21,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/nested_cx/span_cx",
            "value": 42,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/out_of_order_cx_drop/span_cx",
            "value": 40,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "telemetry_suppression/enter_telemetry_suppressed_scope",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "telemetry_suppression/normal_attach",
            "value": 28,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "telemetry_suppression/is_current_telemetry_suppressed_false",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "telemetry_suppression/is_current_telemetry_suppressed_true",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "NoAttributes",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "AddWithInlineStaticAttributes",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "AddWithStaticArray",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "AddWithDynamicAttributes",
            "value": 98,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "AddWithDynamicAttributes_WithStringAllocation",
            "value": 83,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "otel_2_attributes",
            "value": 270,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "log_no_subscriber",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "ot_layer_enabled",
            "value": 273,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ot_layer_disabled",
            "value": 14,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "noop_layer_enabled",
            "value": 21,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "noop_layer_disabled",
            "value": 9,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span_4_attributes",
            "value": 275,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "span_8_attributes",
            "value": 407,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "nested_spans_1_levels",
            "value": 294,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "nested_spans_2_levels",
            "value": 659,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "nested_spans_3_levels",
            "value": 1039,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "BatchSpanProcessor/with 1 concurrent task",
            "value": 600710,
            "range": "± 10544",
            "unit": "ns/iter"
          },
          {
            "name": "BatchSpanProcessor/with 2 concurrent task",
            "value": 639387,
            "range": "± 15493",
            "unit": "ns/iter"
          },
          {
            "name": "BatchSpanProcessor/with 4 concurrent task",
            "value": 671999,
            "range": "± 5701",
            "unit": "ns/iter"
          },
          {
            "name": "BatchSpanProcessor/with 8 concurrent task",
            "value": 863743,
            "range": "± 17842896",
            "unit": "ns/iter"
          },
          {
            "name": "BatchSpanProcessor/with 16 concurrent task",
            "value": 3872570,
            "range": "± 54359556",
            "unit": "ns/iter"
          },
          {
            "name": "BatchSpanProcessor/with 32 concurrent task",
            "value": 5866480,
            "range": "± 613052",
            "unit": "ns/iter"
          },
          {
            "name": "context/has_active_span/in-cx/alt",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_sampled/in-cx/alt",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_recording/in-cx/alt",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/has_active_span/in-cx/spec",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_sampled/in-cx/spec",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_recording/in-cx/spec",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/has_active_span/no-cx/alt",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_sampled/no-cx/alt",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_recording/no-cx/alt",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/has_active_span/no-cx/spec",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_sampled/no-cx/spec",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_recording/no-cx/spec",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/has_active_span/no-sdk/alt",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_sampled/no-sdk/alt",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_recording/no-sdk/alt",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/has_active_span/no-sdk/spec",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_sampled/no-sdk/spec",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_recording/no-sdk/spec",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Logger_Creation",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "LoggerProvider_Creation",
            "value": 4796,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "Logging_Comparable_To_Appender",
            "value": 88,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log/no-context",
            "value": 51,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log/with-context",
            "value": 52,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-int/no-context",
            "value": 65,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-int/with-context",
            "value": 66,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-double/no-context",
            "value": 65,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-double/with-context",
            "value": 66,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-string/no-context",
            "value": 63,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-string/with-context",
            "value": 64,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-bool/no-context",
            "value": 65,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-bool/with-context",
            "value": 67,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-bytes/no-context",
            "value": 89,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-bytes/with-context",
            "value": 88,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-a-lot-of-bytes/no-context",
            "value": 88,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-a-lot-of-bytes/with-context",
            "value": 89,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-vec-any-value/no-context",
            "value": 113,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-vec-any-value/with-context",
            "value": 113,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-inner-vec-any-value/no-context",
            "value": 171,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-inner-vec-any-value/with-context",
            "value": 172,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-map-any-value/no-context",
            "value": 142,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-map-any-value/with-context",
            "value": 136,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-inner-map-any-value/no-context",
            "value": 233,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-inner-map-any-value/with-context",
            "value": 231,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "long-log/no-context",
            "value": 51,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "long-log/with-context",
            "value": 52,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "full-log/no-context",
            "value": 27,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "full-log/with-context",
            "value": 30,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "full-log-with-4-attributes/no-context",
            "value": 74,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "full-log-with-4-attributes/with-context",
            "value": 77,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "full-log-with-9-attributes/no-context",
            "value": 137,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "full-log-with-9-attributes/with-context",
            "value": 139,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "full-log-with-attributes/no-context",
            "value": 252,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "full-log-with-attributes/with-context",
            "value": 251,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "exporter_disabled_concurrent_processor",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "exporter_disabled_simple_processor",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "LogExporterWithFuture",
            "value": 91,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "LogExporterWithoutFuture",
            "value": 86,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "log_noop_processor",
            "value": 85,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "log_cloning_processor",
            "value": 172,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "log_clone_and_send_to_channel_processor",
            "value": 507,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddNoAttrs",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddOneAttr",
            "value": 47,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddThreeAttr",
            "value": 96,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddFiveAttr",
            "value": 145,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddTenAttr",
            "value": 300,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddOneTillMaxAttr",
            "value": 40032,
            "range": "± 324",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddMaxAttr",
            "value": 81447,
            "range": "± 399",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddInvalidAttr",
            "value": 69,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddSingleUseAttrs",
            "value": 210,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddSingleUseInvalid",
            "value": 282,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddSingleUseFiltered",
            "value": 296,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/CollectOneAttr",
            "value": 225,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/CollectTenAttrs",
            "value": 518,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record0Attrs10bounds",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record3Attrs10bounds",
            "value": 128,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record5Attrs10bounds",
            "value": 180,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record7Attrs10bounds",
            "value": 238,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record10Attrs10bounds",
            "value": 324,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record0Attrs49bounds",
            "value": 41,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record3Attrs49bounds",
            "value": 136,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record5Attrs49bounds",
            "value": 189,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record7Attrs49bounds",
            "value": 246,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record10Attrs49bounds",
            "value": 337,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record0Attrs50bounds",
            "value": 41,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record3Attrs50bounds",
            "value": 136,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record5Attrs50bounds",
            "value": 187,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record7Attrs50bounds",
            "value": 246,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record10Attrs50bounds",
            "value": 332,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record0Attrs1000bounds",
            "value": 57,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record3Attrs1000bounds",
            "value": 155,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record5Attrs1000bounds",
            "value": 207,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record7Attrs1000bounds",
            "value": 268,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record10Attrs1000bounds",
            "value": 356,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/CollectOne",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/CollectFive",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/CollectTen",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/CollectTwentyFive",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Counter_Add_Sorted",
            "value": 173,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "Counter_Add_Unsorted",
            "value": 181,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "Counter_Add_Sorted_With_Non_Static_Values",
            "value": 256,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "Counter_Overflow",
            "value": 564,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ThreadLocal_Random_Generator_5",
            "value": 10,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Gauge_Add",
            "value": 188,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram_Record",
            "value": 207,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram_Record_With_Non_Static_Values",
            "value": 287,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-simple/always-sample",
            "value": 374,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-simple/never-sample",
            "value": 120,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-span-builder/always-sample",
            "value": 376,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-span-builder/never-sample",
            "value": 167,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-tracer-in-span/always-sample",
            "value": 531,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-tracer-in-span/never-sample",
            "value": 186,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-tracer-in-span-with-builder/always-sample",
            "value": 492,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-tracer-in-span-with-builder/never-sample",
            "value": 224,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-simple-context-activation/always-sample",
            "value": 494,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-simple-context-activation/never-sample",
            "value": 93,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-span-builder-context-activation/always-sample",
            "value": 480,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-span-builder-context-activation/never-sample",
            "value": 140,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span_builder/simplest",
            "value": 119,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span_builder/with_attributes/1",
            "value": 152,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "span_builder/with_attributes/4",
            "value": 174,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span/always-sample",
            "value": 240,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span/never-sample",
            "value": 124,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-4-attrs/always-sample",
            "value": 303,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-4-attrs/never-sample",
            "value": 156,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-8-attrs/always-sample",
            "value": 404,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-8-attrs/never-sample",
            "value": 192,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-all-attr-types/always-sample",
            "value": 319,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-all-attr-types/never-sample",
            "value": 166,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-all-attr-types-2x/always-sample",
            "value": 426,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-all-attr-types-2x/never-sample",
            "value": 211,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Tracer_With_Name/new_each_time",
            "value": 28,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Tracer_With_Name/reuse_existing",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Tracer_With_Name_And_Scope_Attrs/new_each_time",
            "value": 66,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Tracer_With_Name_And_Scope_Attrs/reuse_existing",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Scott Gerring",
            "username": "scottgerring",
            "email": "scott@scottgerring.com"
          },
          "committer": {
            "name": "Scott Gerring",
            "username": "scottgerring",
            "email": "scott@scottgerring.com"
          },
          "id": "cfcd3dd230fe9554da20b2379361be272a22c4aa",
          "message": "chore: temporarily enable guard on workflow_dispatch",
          "timestamp": "2026-03-10T06:52:07Z",
          "url": "https://github.com/scottgerring/opentelemetry-rust/commit/cfcd3dd230fe9554da20b2379361be272a22c4aa"
        },
        "date": 1773126802957,
        "tool": "cargo",
        "benches": [
          {
            "name": "CreateOTelValueString",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelAnyValueString",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelValueInt",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelAnyValueInt",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelKey_Static",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelKey_Owned",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelKey_Arc",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelKeyValue",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateTupleKeyValue",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOtelKeyValueArray",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOtelKeyValueArrayWithMixedValueTypes",
            "value": 13,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOtelKeyValueArrayWithNonStaticValues",
            "value": 108,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "CreateTupleKeyValueArray",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "set_baggage_static_key_value",
            "value": 29,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "set_baggage_static_key",
            "value": 53,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "set_baggage_dynamic",
            "value": 70,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "set_baggage_dynamic_with_metadata",
            "value": 102,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/single_cx/empty_cx",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/nested_cx/empty_cx",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/out_of_order_cx_drop/empty_cx",
            "value": 35,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/single_cx/single_value_cx",
            "value": 21,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/nested_cx/single_value_cx",
            "value": 40,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/out_of_order_cx_drop/single_value_cx",
            "value": 40,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/single_cx/span_cx",
            "value": 21,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/nested_cx/span_cx",
            "value": 40,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/out_of_order_cx_drop/span_cx",
            "value": 39,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "telemetry_suppression/enter_telemetry_suppressed_scope",
            "value": 23,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "telemetry_suppression/normal_attach",
            "value": 25,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "telemetry_suppression/is_current_telemetry_suppressed_false",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "telemetry_suppression/is_current_telemetry_suppressed_true",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "NoAttributes",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "AddWithInlineStaticAttributes",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "AddWithStaticArray",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "AddWithDynamicAttributes",
            "value": 94,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "AddWithDynamicAttributes_WithStringAllocation",
            "value": 87,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "otel_2_attributes",
            "value": 274,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "log_no_subscriber",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "ot_layer_enabled",
            "value": 263,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ot_layer_disabled",
            "value": 14,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "noop_layer_enabled",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "noop_layer_disabled",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span_4_attributes",
            "value": 270,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "span_8_attributes",
            "value": 409,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "nested_spans_1_levels",
            "value": 287,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "nested_spans_2_levels",
            "value": 646,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "nested_spans_3_levels",
            "value": 1026,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "BatchSpanProcessor/with 1 concurrent task",
            "value": 537829,
            "range": "± 24536",
            "unit": "ns/iter"
          },
          {
            "name": "BatchSpanProcessor/with 2 concurrent task",
            "value": 583022,
            "range": "± 4833",
            "unit": "ns/iter"
          },
          {
            "name": "BatchSpanProcessor/with 4 concurrent task",
            "value": 663388,
            "range": "± 42498",
            "unit": "ns/iter"
          },
          {
            "name": "BatchSpanProcessor/with 8 concurrent task",
            "value": 1499656,
            "range": "± 233711",
            "unit": "ns/iter"
          },
          {
            "name": "BatchSpanProcessor/with 16 concurrent task",
            "value": 2156543,
            "range": "± 169310",
            "unit": "ns/iter"
          },
          {
            "name": "BatchSpanProcessor/with 32 concurrent task",
            "value": 4882801,
            "range": "± 1590108",
            "unit": "ns/iter"
          },
          {
            "name": "context/has_active_span/in-cx/alt",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_sampled/in-cx/alt",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_recording/in-cx/alt",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/has_active_span/in-cx/spec",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_sampled/in-cx/spec",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_recording/in-cx/spec",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/has_active_span/no-cx/alt",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_sampled/no-cx/alt",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_recording/no-cx/alt",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/has_active_span/no-cx/spec",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_sampled/no-cx/spec",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_recording/no-cx/spec",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/has_active_span/no-sdk/alt",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_sampled/no-sdk/alt",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_recording/no-sdk/alt",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/has_active_span/no-sdk/spec",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_sampled/no-sdk/spec",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_recording/no-sdk/spec",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Logger_Creation",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "LoggerProvider_Creation",
            "value": 4754,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "Logging_Comparable_To_Appender",
            "value": 88,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log/no-context",
            "value": 51,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log/with-context",
            "value": 52,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-int/no-context",
            "value": 64,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-int/with-context",
            "value": 65,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-double/no-context",
            "value": 64,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-double/with-context",
            "value": 65,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-string/no-context",
            "value": 64,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-string/with-context",
            "value": 64,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-bool/no-context",
            "value": 65,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-bool/with-context",
            "value": 66,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-bytes/no-context",
            "value": 88,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-bytes/with-context",
            "value": 88,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-a-lot-of-bytes/no-context",
            "value": 88,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-a-lot-of-bytes/with-context",
            "value": 90,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-vec-any-value/no-context",
            "value": 112,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-vec-any-value/with-context",
            "value": 113,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-inner-vec-any-value/no-context",
            "value": 180,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-inner-vec-any-value/with-context",
            "value": 179,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-map-any-value/no-context",
            "value": 136,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-map-any-value/with-context",
            "value": 142,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-inner-map-any-value/no-context",
            "value": 221,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-inner-map-any-value/with-context",
            "value": 219,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "long-log/no-context",
            "value": 51,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "long-log/with-context",
            "value": 52,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "full-log/no-context",
            "value": 26,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "full-log/with-context",
            "value": 30,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "full-log-with-4-attributes/no-context",
            "value": 74,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "full-log-with-4-attributes/with-context",
            "value": 75,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "full-log-with-9-attributes/no-context",
            "value": 138,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "full-log-with-9-attributes/with-context",
            "value": 140,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "full-log-with-attributes/no-context",
            "value": 241,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "full-log-with-attributes/with-context",
            "value": 263,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "exporter_disabled_concurrent_processor",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "exporter_disabled_simple_processor",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "LogExporterWithFuture",
            "value": 91,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "LogExporterWithoutFuture",
            "value": 87,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "log_noop_processor",
            "value": 85,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "log_cloning_processor",
            "value": 182,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "log_clone_and_send_to_channel_processor",
            "value": 504,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddNoAttrs",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddOneAttr",
            "value": 46,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddThreeAttr",
            "value": 106,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddFiveAttr",
            "value": 165,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddTenAttr",
            "value": 332,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddOneTillMaxAttr",
            "value": 46613,
            "range": "± 500",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddMaxAttr",
            "value": 94578,
            "range": "± 665",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddInvalidAttr",
            "value": 73,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddSingleUseAttrs",
            "value": 209,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddSingleUseInvalid",
            "value": 288,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddSingleUseFiltered",
            "value": 294,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/CollectOneAttr",
            "value": 227,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/CollectTenAttrs",
            "value": 518,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record0Attrs10bounds",
            "value": 34,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record3Attrs10bounds",
            "value": 133,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record5Attrs10bounds",
            "value": 193,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record7Attrs10bounds",
            "value": 264,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record10Attrs10bounds",
            "value": 354,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record0Attrs49bounds",
            "value": 42,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record3Attrs49bounds",
            "value": 142,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record5Attrs49bounds",
            "value": 201,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record7Attrs49bounds",
            "value": 270,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record10Attrs49bounds",
            "value": 365,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record0Attrs50bounds",
            "value": 42,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record3Attrs50bounds",
            "value": 141,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record5Attrs50bounds",
            "value": 204,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record7Attrs50bounds",
            "value": 272,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record10Attrs50bounds",
            "value": 371,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record0Attrs1000bounds",
            "value": 59,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record3Attrs1000bounds",
            "value": 161,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record5Attrs1000bounds",
            "value": 223,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record7Attrs1000bounds",
            "value": 290,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record10Attrs1000bounds",
            "value": 383,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/CollectOne",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/CollectFive",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/CollectTen",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/CollectTwentyFive",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Counter_Add_Sorted",
            "value": 174,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Counter_Add_Unsorted",
            "value": 183,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Counter_Add_Sorted_With_Non_Static_Values",
            "value": 263,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Counter_Overflow",
            "value": 537,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "ThreadLocal_Random_Generator_5",
            "value": 10,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Gauge_Add",
            "value": 186,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram_Record",
            "value": 207,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram_Record_With_Non_Static_Values",
            "value": 293,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-simple/always-sample",
            "value": 372,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-simple/never-sample",
            "value": 119,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-span-builder/always-sample",
            "value": 382,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-span-builder/never-sample",
            "value": 180,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-tracer-in-span/always-sample",
            "value": 536,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-tracer-in-span/never-sample",
            "value": 182,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-tracer-in-span-with-builder/always-sample",
            "value": 488,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-tracer-in-span-with-builder/never-sample",
            "value": 228,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-simple-context-activation/always-sample",
            "value": 508,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-simple-context-activation/never-sample",
            "value": 95,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-span-builder-context-activation/always-sample",
            "value": 505,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-span-builder-context-activation/never-sample",
            "value": 153,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "span_builder/simplest",
            "value": 124,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "span_builder/with_attributes/1",
            "value": 143,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span_builder/with_attributes/4",
            "value": 172,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span/always-sample",
            "value": 233,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span/never-sample",
            "value": 119,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-4-attrs/always-sample",
            "value": 300,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-4-attrs/never-sample",
            "value": 152,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-8-attrs/always-sample",
            "value": 409,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-8-attrs/never-sample",
            "value": 186,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-all-attr-types/always-sample",
            "value": 307,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-all-attr-types/never-sample",
            "value": 162,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-all-attr-types-2x/always-sample",
            "value": 430,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-all-attr-types-2x/never-sample",
            "value": 206,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Tracer_With_Name/new_each_time",
            "value": 28,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Tracer_With_Name/reuse_existing",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Tracer_With_Name_And_Scope_Attrs/new_each_time",
            "value": 65,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Tracer_With_Name_And_Scope_Attrs/reuse_existing",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Scott Gerring",
            "username": "scottgerring",
            "email": "scott@scottgerring.com"
          },
          "committer": {
            "name": "Scott Gerring",
            "username": "scottgerring",
            "email": "scott@scottgerring.com"
          },
          "id": "315aa2b71f85f1ae2fedd5c872a024871d906383",
          "message": "chore: temporarily enable guard on workflow_dispatch",
          "timestamp": "2026-03-10T06:52:07Z",
          "url": "https://github.com/scottgerring/opentelemetry-rust/commit/315aa2b71f85f1ae2fedd5c872a024871d906383"
        },
        "date": 1773129566955,
        "tool": "cargo",
        "benches": [
          {
            "name": "CreateOTelValueString",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelAnyValueString",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelValueInt",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelAnyValueInt",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelKey_Static",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelKey_Owned",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelKey_Arc",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelKeyValue",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateTupleKeyValue",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOtelKeyValueArray",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOtelKeyValueArrayWithMixedValueTypes",
            "value": 13,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOtelKeyValueArrayWithNonStaticValues",
            "value": 91,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateTupleKeyValueArray",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "set_baggage_static_key_value",
            "value": 30,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "set_baggage_static_key",
            "value": 53,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "set_baggage_dynamic",
            "value": 73,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "set_baggage_dynamic_with_metadata",
            "value": 103,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/single_cx/empty_cx",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/nested_cx/empty_cx",
            "value": 35,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/out_of_order_cx_drop/empty_cx",
            "value": 35,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/single_cx/single_value_cx",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/nested_cx/single_value_cx",
            "value": 41,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/out_of_order_cx_drop/single_value_cx",
            "value": 40,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/single_cx/span_cx",
            "value": 21,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/nested_cx/span_cx",
            "value": 41,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/out_of_order_cx_drop/span_cx",
            "value": 40,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "telemetry_suppression/enter_telemetry_suppressed_scope",
            "value": 23,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "telemetry_suppression/normal_attach",
            "value": 25,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "telemetry_suppression/is_current_telemetry_suppressed_false",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "telemetry_suppression/is_current_telemetry_suppressed_true",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "NoAttributes",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "AddWithInlineStaticAttributes",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "AddWithStaticArray",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "AddWithDynamicAttributes",
            "value": 93,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "AddWithDynamicAttributes_WithStringAllocation",
            "value": 87,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "otel_2_attributes",
            "value": 273,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "log_no_subscriber",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "ot_layer_enabled",
            "value": 262,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ot_layer_disabled",
            "value": 14,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "noop_layer_enabled",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "noop_layer_disabled",
            "value": 9,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span_4_attributes",
            "value": 270,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "span_8_attributes",
            "value": 407,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "nested_spans_1_levels",
            "value": 285,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "nested_spans_2_levels",
            "value": 642,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "nested_spans_3_levels",
            "value": 1026,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "BatchSpanProcessor/with 1 concurrent task",
            "value": 586632,
            "range": "± 15623",
            "unit": "ns/iter"
          },
          {
            "name": "BatchSpanProcessor/with 2 concurrent task",
            "value": 598244,
            "range": "± 6798",
            "unit": "ns/iter"
          },
          {
            "name": "BatchSpanProcessor/with 4 concurrent task",
            "value": 1207833,
            "range": "± 184258",
            "unit": "ns/iter"
          },
          {
            "name": "BatchSpanProcessor/with 8 concurrent task",
            "value": 1554208,
            "range": "± 8227026",
            "unit": "ns/iter"
          },
          {
            "name": "BatchSpanProcessor/with 16 concurrent task",
            "value": 3964516,
            "range": "± 398441",
            "unit": "ns/iter"
          },
          {
            "name": "BatchSpanProcessor/with 32 concurrent task",
            "value": 5907673,
            "range": "± 695035",
            "unit": "ns/iter"
          },
          {
            "name": "context/has_active_span/in-cx/alt",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_sampled/in-cx/alt",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_recording/in-cx/alt",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/has_active_span/in-cx/spec",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_sampled/in-cx/spec",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_recording/in-cx/spec",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/has_active_span/no-cx/alt",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_sampled/no-cx/alt",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_recording/no-cx/alt",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/has_active_span/no-cx/spec",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_sampled/no-cx/spec",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_recording/no-cx/spec",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/has_active_span/no-sdk/alt",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_sampled/no-sdk/alt",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_recording/no-sdk/alt",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/has_active_span/no-sdk/spec",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_sampled/no-sdk/spec",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_recording/no-sdk/spec",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Logger_Creation",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "LoggerProvider_Creation",
            "value": 4764,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "Logging_Comparable_To_Appender",
            "value": 88,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log/no-context",
            "value": 51,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log/with-context",
            "value": 52,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-int/no-context",
            "value": 64,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-int/with-context",
            "value": 65,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-double/no-context",
            "value": 64,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-double/with-context",
            "value": 65,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-string/no-context",
            "value": 64,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-string/with-context",
            "value": 64,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-bool/no-context",
            "value": 65,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-bool/with-context",
            "value": 66,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-bytes/no-context",
            "value": 88,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-bytes/with-context",
            "value": 88,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-a-lot-of-bytes/no-context",
            "value": 88,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-a-lot-of-bytes/with-context",
            "value": 90,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-vec-any-value/no-context",
            "value": 113,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-vec-any-value/with-context",
            "value": 115,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-inner-vec-any-value/no-context",
            "value": 177,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-inner-vec-any-value/with-context",
            "value": 177,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-map-any-value/no-context",
            "value": 136,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-map-any-value/with-context",
            "value": 142,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-inner-map-any-value/no-context",
            "value": 225,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-inner-map-any-value/with-context",
            "value": 222,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "long-log/no-context",
            "value": 51,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "long-log/with-context",
            "value": 52,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "full-log/no-context",
            "value": 27,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "full-log/with-context",
            "value": 30,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "full-log-with-4-attributes/no-context",
            "value": 75,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "full-log-with-4-attributes/with-context",
            "value": 75,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "full-log-with-9-attributes/no-context",
            "value": 138,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "full-log-with-9-attributes/with-context",
            "value": 140,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "full-log-with-attributes/no-context",
            "value": 241,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "full-log-with-attributes/with-context",
            "value": 264,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "exporter_disabled_concurrent_processor",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "exporter_disabled_simple_processor",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "LogExporterWithFuture",
            "value": 90,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "LogExporterWithoutFuture",
            "value": 87,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "log_noop_processor",
            "value": 85,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "log_cloning_processor",
            "value": 182,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "log_clone_and_send_to_channel_processor",
            "value": 507,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddNoAttrs",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddOneAttr",
            "value": 47,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddThreeAttr",
            "value": 106,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddFiveAttr",
            "value": 164,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddTenAttr",
            "value": 333,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddOneTillMaxAttr",
            "value": 45118,
            "range": "± 354",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddMaxAttr",
            "value": 95163,
            "range": "± 1465",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddInvalidAttr",
            "value": 73,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddSingleUseAttrs",
            "value": 214,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddSingleUseInvalid",
            "value": 308,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddSingleUseFiltered",
            "value": 299,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/CollectOneAttr",
            "value": 236,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/CollectTenAttrs",
            "value": 512,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record0Attrs10bounds",
            "value": 38,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record3Attrs10bounds",
            "value": 133,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record5Attrs10bounds",
            "value": 193,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record7Attrs10bounds",
            "value": 267,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record10Attrs10bounds",
            "value": 363,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record0Attrs49bounds",
            "value": 47,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record3Attrs49bounds",
            "value": 141,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record5Attrs49bounds",
            "value": 202,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record7Attrs49bounds",
            "value": 270,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record10Attrs49bounds",
            "value": 362,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record0Attrs50bounds",
            "value": 47,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record3Attrs50bounds",
            "value": 152,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record5Attrs50bounds",
            "value": 213,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record7Attrs50bounds",
            "value": 275,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record10Attrs50bounds",
            "value": 373,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record0Attrs1000bounds",
            "value": 64,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record3Attrs1000bounds",
            "value": 159,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record5Attrs1000bounds",
            "value": 234,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record7Attrs1000bounds",
            "value": 307,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record10Attrs1000bounds",
            "value": 423,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/CollectOne",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/CollectFive",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/CollectTen",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/CollectTwentyFive",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Counter_Add_Sorted",
            "value": 174,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "Counter_Add_Unsorted",
            "value": 179,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "Counter_Add_Sorted_With_Non_Static_Values",
            "value": 260,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Counter_Overflow",
            "value": 539,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ThreadLocal_Random_Generator_5",
            "value": 10,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Gauge_Add",
            "value": 186,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram_Record",
            "value": 209,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram_Record_With_Non_Static_Values",
            "value": 291,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-simple/always-sample",
            "value": 370,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-simple/never-sample",
            "value": 119,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-span-builder/always-sample",
            "value": 382,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-span-builder/never-sample",
            "value": 172,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-tracer-in-span/always-sample",
            "value": 521,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-tracer-in-span/never-sample",
            "value": 175,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-tracer-in-span-with-builder/always-sample",
            "value": 491,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-tracer-in-span-with-builder/never-sample",
            "value": 233,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-simple-context-activation/always-sample",
            "value": 499,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-simple-context-activation/never-sample",
            "value": 87,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-span-builder-context-activation/always-sample",
            "value": 490,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-span-builder-context-activation/never-sample",
            "value": 142,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span_builder/simplest",
            "value": 113,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span_builder/with_attributes/1",
            "value": 149,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span_builder/with_attributes/4",
            "value": 178,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span/always-sample",
            "value": 234,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span/never-sample",
            "value": 113,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-4-attrs/always-sample",
            "value": 292,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-4-attrs/never-sample",
            "value": 153,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-8-attrs/always-sample",
            "value": 414,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-8-attrs/never-sample",
            "value": 184,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-all-attr-types/always-sample",
            "value": 304,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-all-attr-types/never-sample",
            "value": 163,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-all-attr-types-2x/always-sample",
            "value": 437,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-all-attr-types-2x/never-sample",
            "value": 205,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Tracer_With_Name/new_each_time",
            "value": 28,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Tracer_With_Name/reuse_existing",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Tracer_With_Name_And_Scope_Attrs/new_each_time",
            "value": 66,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Tracer_With_Name_And_Scope_Attrs/reuse_existing",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Scott Gerring",
            "username": "scottgerring",
            "email": "scott@scottgerring.com"
          },
          "committer": {
            "name": "Scott Gerring",
            "username": "scottgerring",
            "email": "scott@scottgerring.com"
          },
          "id": "77822805f20d6e27d6e494d5582140a71644bdc5",
          "message": "chore: change to run on schedule or trigger, not on push to main\n\nchore: temporarily enable guard on workflow_dispatch",
          "timestamp": "2026-03-10T06:39:35Z",
          "url": "https://github.com/scottgerring/opentelemetry-rust/commit/77822805f20d6e27d6e494d5582140a71644bdc5"
        },
        "date": 1773211402025,
        "tool": "cargo",
        "benches": [
          {
            "name": "CreateOTelValueString",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelAnyValueString",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelValueInt",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelAnyValueInt",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelKey_Static",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelKey_Owned",
            "value": 13,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelKey_Arc",
            "value": 23,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelKeyValue",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateTupleKeyValue",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOtelKeyValueArray",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOtelKeyValueArrayWithMixedValueTypes",
            "value": 11,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOtelKeyValueArrayWithNonStaticValues",
            "value": 78,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateTupleKeyValueArray",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "set_baggage_static_key_value",
            "value": 23,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "set_baggage_static_key",
            "value": 45,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "set_baggage_dynamic",
            "value": 69,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "set_baggage_dynamic_with_metadata",
            "value": 90,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/single_cx/empty_cx",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/nested_cx/empty_cx",
            "value": 30,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/out_of_order_cx_drop/empty_cx",
            "value": 26,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/single_cx/single_value_cx",
            "value": 21,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/nested_cx/single_value_cx",
            "value": 42,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/out_of_order_cx_drop/single_value_cx",
            "value": 36,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/single_cx/span_cx",
            "value": 21,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/nested_cx/span_cx",
            "value": 42,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/out_of_order_cx_drop/span_cx",
            "value": 37,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "telemetry_suppression/enter_telemetry_suppressed_scope",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "telemetry_suppression/normal_attach",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "telemetry_suppression/is_current_telemetry_suppressed_false",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "telemetry_suppression/is_current_telemetry_suppressed_true",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "NoAttributes",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "AddWithInlineStaticAttributes",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "AddWithStaticArray",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "AddWithDynamicAttributes",
            "value": 100,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "AddWithDynamicAttributes_WithStringAllocation",
            "value": 72,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "otel_2_attributes",
            "value": 242,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "log_no_subscriber",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "ot_layer_enabled",
            "value": 241,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "ot_layer_disabled",
            "value": 11,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "noop_layer_enabled",
            "value": 17,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "noop_layer_disabled",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span_4_attributes",
            "value": 281,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span_8_attributes",
            "value": 431,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "nested_spans_1_levels",
            "value": 292,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "nested_spans_2_levels",
            "value": 754,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "nested_spans_3_levels",
            "value": 1235,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "BatchSpanProcessor/with 1 concurrent task",
            "value": 496815,
            "range": "± 13775",
            "unit": "ns/iter"
          },
          {
            "name": "BatchSpanProcessor/with 2 concurrent task",
            "value": 539279,
            "range": "± 7403",
            "unit": "ns/iter"
          },
          {
            "name": "BatchSpanProcessor/with 4 concurrent task",
            "value": 639243,
            "range": "± 16115667",
            "unit": "ns/iter"
          },
          {
            "name": "BatchSpanProcessor/with 8 concurrent task",
            "value": 1398856,
            "range": "± 116702",
            "unit": "ns/iter"
          },
          {
            "name": "BatchSpanProcessor/with 16 concurrent task",
            "value": 3941608,
            "range": "± 1559039",
            "unit": "ns/iter"
          },
          {
            "name": "BatchSpanProcessor/with 32 concurrent task",
            "value": 5512338,
            "range": "± 567396",
            "unit": "ns/iter"
          },
          {
            "name": "context/has_active_span/in-cx/alt",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_sampled/in-cx/alt",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_recording/in-cx/alt",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/has_active_span/in-cx/spec",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_sampled/in-cx/spec",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_recording/in-cx/spec",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/has_active_span/no-cx/alt",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_sampled/no-cx/alt",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_recording/no-cx/alt",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/has_active_span/no-cx/spec",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_sampled/no-cx/spec",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_recording/no-cx/spec",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/has_active_span/no-sdk/alt",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_sampled/no-sdk/alt",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_recording/no-sdk/alt",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/has_active_span/no-sdk/spec",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_sampled/no-sdk/spec",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_recording/no-sdk/spec",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Logger_Creation",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "LoggerProvider_Creation",
            "value": 2635,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "Logging_Comparable_To_Appender",
            "value": 66,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log/no-context",
            "value": 48,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log/with-context",
            "value": 40,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-int/no-context",
            "value": 59,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-int/with-context",
            "value": 48,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-double/no-context",
            "value": 59,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-double/with-context",
            "value": 48,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-string/no-context",
            "value": 59,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-string/with-context",
            "value": 49,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-bool/no-context",
            "value": 58,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-bool/with-context",
            "value": 49,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-bytes/no-context",
            "value": 85,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-bytes/with-context",
            "value": 74,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-a-lot-of-bytes/no-context",
            "value": 86,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-a-lot-of-bytes/with-context",
            "value": 76,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-vec-any-value/no-context",
            "value": 115,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-vec-any-value/with-context",
            "value": 106,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-inner-vec-any-value/no-context",
            "value": 172,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-inner-vec-any-value/with-context",
            "value": 161,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-map-any-value/no-context",
            "value": 131,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-map-any-value/with-context",
            "value": 122,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-inner-map-any-value/no-context",
            "value": 206,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-inner-map-any-value/with-context",
            "value": 198,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "long-log/no-context",
            "value": 48,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "long-log/with-context",
            "value": 40,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "full-log/no-context",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "full-log/with-context",
            "value": 25,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "full-log-with-4-attributes/no-context",
            "value": 61,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "full-log-with-4-attributes/with-context",
            "value": 62,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "full-log-with-9-attributes/no-context",
            "value": 119,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "full-log-with-9-attributes/with-context",
            "value": 118,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "full-log-with-attributes/no-context",
            "value": 205,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "full-log-with-attributes/with-context",
            "value": 203,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "exporter_disabled_concurrent_processor",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "exporter_disabled_simple_processor",
            "value": 14,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "LogExporterWithFuture",
            "value": 83,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "LogExporterWithoutFuture",
            "value": 79,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "log_noop_processor",
            "value": 68,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "log_cloning_processor",
            "value": 142,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "log_clone_and_send_to_channel_processor",
            "value": 430,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddNoAttrs",
            "value": 10,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddOneAttr",
            "value": 49,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddThreeAttr",
            "value": 110,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddFiveAttr",
            "value": 170,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddTenAttr",
            "value": 332,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddOneTillMaxAttr",
            "value": 43673,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddMaxAttr",
            "value": 89177,
            "range": "± 302",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddInvalidAttr",
            "value": 75,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddSingleUseAttrs",
            "value": 191,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddSingleUseInvalid",
            "value": 265,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddSingleUseFiltered",
            "value": 276,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/CollectOneAttr",
            "value": 212,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/CollectTenAttrs",
            "value": 513,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record0Attrs10bounds",
            "value": 23,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record3Attrs10bounds",
            "value": 135,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record5Attrs10bounds",
            "value": 197,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record7Attrs10bounds",
            "value": 262,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record10Attrs10bounds",
            "value": 362,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record0Attrs49bounds",
            "value": 25,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record3Attrs49bounds",
            "value": 144,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record5Attrs49bounds",
            "value": 210,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record7Attrs49bounds",
            "value": 267,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record10Attrs49bounds",
            "value": 375,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record0Attrs50bounds",
            "value": 25,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record3Attrs50bounds",
            "value": 142,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record5Attrs50bounds",
            "value": 202,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record7Attrs50bounds",
            "value": 266,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record10Attrs50bounds",
            "value": 371,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record0Attrs1000bounds",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record3Attrs1000bounds",
            "value": 154,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record5Attrs1000bounds",
            "value": 217,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record7Attrs1000bounds",
            "value": 284,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record10Attrs1000bounds",
            "value": 380,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/CollectOne",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/CollectFive",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/CollectTen",
            "value": 21,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/CollectTwentyFive",
            "value": 21,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Counter_Add_Sorted",
            "value": 160,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "Counter_Add_Unsorted",
            "value": 158,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Counter_Add_Sorted_With_Non_Static_Values",
            "value": 230,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Counter_Overflow",
            "value": 519,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ThreadLocal_Random_Generator_5",
            "value": 9,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Gauge_Add",
            "value": 173,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram_Record",
            "value": 184,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram_Record_With_Non_Static_Values",
            "value": 254,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-simple/always-sample",
            "value": 332,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-simple/never-sample",
            "value": 100,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-span-builder/always-sample",
            "value": 338,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-span-builder/never-sample",
            "value": 142,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-tracer-in-span/always-sample",
            "value": 525,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-tracer-in-span/never-sample",
            "value": 189,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-tracer-in-span-with-builder/always-sample",
            "value": 478,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-tracer-in-span-with-builder/never-sample",
            "value": 229,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-simple-context-activation/always-sample",
            "value": 457,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-simple-context-activation/never-sample",
            "value": 90,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-span-builder-context-activation/always-sample",
            "value": 449,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-span-builder-context-activation/never-sample",
            "value": 120,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span_builder/simplest",
            "value": 103,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span_builder/with_attributes/1",
            "value": 122,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span_builder/with_attributes/4",
            "value": 145,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span/always-sample",
            "value": 195,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span/never-sample",
            "value": 101,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-4-attrs/always-sample",
            "value": 256,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-4-attrs/never-sample",
            "value": 125,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-8-attrs/always-sample",
            "value": 358,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-8-attrs/never-sample",
            "value": 152,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-all-attr-types/always-sample",
            "value": 268,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-all-attr-types/never-sample",
            "value": 136,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-all-attr-types-2x/always-sample",
            "value": 375,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-all-attr-types-2x/never-sample",
            "value": 167,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Tracer_With_Name/new_each_time",
            "value": 50,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Tracer_With_Name/reuse_existing",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Tracer_With_Name_And_Scope_Attrs/new_each_time",
            "value": 85,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Tracer_With_Name_And_Scope_Attrs/reuse_existing",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "67e7dffc3f388c5f39ea1ddf9b4def9c7918679c",
          "message": "chore(deps): bump codecov/codecov-action from 5.5.2 to 6.0.0 (#3447)\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-04-02T00:30:05Z",
          "url": "https://github.com/scottgerring/opentelemetry-rust/commit/67e7dffc3f388c5f39ea1ddf9b4def9c7918679c"
        },
        "date": 1775545195443,
        "tool": "cargo",
        "benches": [
          {
            "name": "CreateOTelValueString",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelAnyValueString",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelValueInt",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelAnyValueInt",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelKey_Static",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelKey_Owned",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelKey_Arc",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelKeyValue",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateTupleKeyValue",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOtelKeyValueArray",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOtelKeyValueArrayWithMixedValueTypes",
            "value": 13,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOtelKeyValueArrayWithNonStaticValues",
            "value": 94,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateTupleKeyValueArray",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "set_baggage_static_key_value",
            "value": 29,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "set_baggage_static_key",
            "value": 55,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "set_baggage_dynamic",
            "value": 70,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "set_baggage_dynamic_with_metadata",
            "value": 109,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/single_cx/empty_cx",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/nested_cx/empty_cx",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/out_of_order_cx_drop/empty_cx",
            "value": 35,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/single_cx/single_value_cx",
            "value": 21,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/nested_cx/single_value_cx",
            "value": 40,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/out_of_order_cx_drop/single_value_cx",
            "value": 39,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/single_cx/span_cx",
            "value": 21,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/nested_cx/span_cx",
            "value": 40,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/out_of_order_cx_drop/span_cx",
            "value": 40,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "telemetry_suppression/enter_telemetry_suppressed_scope",
            "value": 23,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "telemetry_suppression/normal_attach",
            "value": 25,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "telemetry_suppression/is_current_telemetry_suppressed_false",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "telemetry_suppression/is_current_telemetry_suppressed_true",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "NoAttributes",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "AddWithInlineStaticAttributes",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "AddWithStaticArray",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "AddWithDynamicAttributes",
            "value": 97,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "AddWithDynamicAttributes_WithStringAllocation",
            "value": 89,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "otel_2_attributes",
            "value": 269,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "log_no_subscriber",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "ot_layer_enabled",
            "value": 263,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "ot_layer_disabled",
            "value": 14,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "noop_layer_enabled",
            "value": 21,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "noop_layer_disabled",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "log_1_attr_no_span",
            "value": 225,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "log_1_attr_in_span_2_attr",
            "value": 698,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "log_1_attr_in_nested_spans_2plus2_attr",
            "value": 1095,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "span_4_attributes",
            "value": 271,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span_8_attributes",
            "value": 413,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "nested_spans_1_levels",
            "value": 289,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "nested_spans_2_levels",
            "value": 652,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "nested_spans_3_levels",
            "value": 1039,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "BatchSpanProcessor/with 1 concurrent task",
            "value": 539525,
            "range": "± 23502",
            "unit": "ns/iter"
          },
          {
            "name": "BatchSpanProcessor/with 2 concurrent task",
            "value": 573227,
            "range": "± 5589",
            "unit": "ns/iter"
          },
          {
            "name": "BatchSpanProcessor/with 4 concurrent task",
            "value": 614090,
            "range": "± 12873656",
            "unit": "ns/iter"
          },
          {
            "name": "BatchSpanProcessor/with 8 concurrent task",
            "value": 2990631,
            "range": "± 264558",
            "unit": "ns/iter"
          },
          {
            "name": "BatchSpanProcessor/with 16 concurrent task",
            "value": 3732358,
            "range": "± 346427",
            "unit": "ns/iter"
          },
          {
            "name": "BatchSpanProcessor/with 32 concurrent task",
            "value": 6641427,
            "range": "± 141289834",
            "unit": "ns/iter"
          },
          {
            "name": "context/has_active_span/in-cx/alt",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_sampled/in-cx/alt",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_recording/in-cx/alt",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/has_active_span/in-cx/spec",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_sampled/in-cx/spec",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_recording/in-cx/spec",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/has_active_span/no-cx/alt",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_sampled/no-cx/alt",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_recording/no-cx/alt",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/has_active_span/no-cx/spec",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_sampled/no-cx/spec",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_recording/no-cx/spec",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/has_active_span/no-sdk/alt",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_sampled/no-sdk/alt",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_recording/no-sdk/alt",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/has_active_span/no-sdk/spec",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_sampled/no-sdk/spec",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_recording/no-sdk/spec",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Logger_Creation",
            "value": 13,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "LoggerProvider_Creation",
            "value": 4445,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "Logging_Comparable_To_Appender",
            "value": 90,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log/no-context",
            "value": 52,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log/with-context",
            "value": 53,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-int/no-context",
            "value": 65,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-int/with-context",
            "value": 67,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-double/no-context",
            "value": 66,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-double/with-context",
            "value": 67,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-string/no-context",
            "value": 65,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-string/with-context",
            "value": 66,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-bool/no-context",
            "value": 67,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-bool/with-context",
            "value": 68,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-bytes/no-context",
            "value": 88,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-bytes/with-context",
            "value": 90,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-a-lot-of-bytes/no-context",
            "value": 89,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-a-lot-of-bytes/with-context",
            "value": 91,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-vec-any-value/no-context",
            "value": 115,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-vec-any-value/with-context",
            "value": 116,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-inner-vec-any-value/no-context",
            "value": 176,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-inner-vec-any-value/with-context",
            "value": 177,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-map-any-value/no-context",
            "value": 142,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-map-any-value/with-context",
            "value": 143,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-inner-map-any-value/no-context",
            "value": 232,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-inner-map-any-value/with-context",
            "value": 231,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "long-log/no-context",
            "value": 52,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "long-log/with-context",
            "value": 53,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "full-log/no-context",
            "value": 27,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "full-log/with-context",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "full-log-with-4-attributes/no-context",
            "value": 75,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "full-log-with-4-attributes/with-context",
            "value": 77,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "full-log-with-9-attributes/no-context",
            "value": 139,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "full-log-with-9-attributes/with-context",
            "value": 140,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "full-log-with-attributes/no-context",
            "value": 263,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "full-log-with-attributes/with-context",
            "value": 239,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "exporter_disabled_concurrent_processor",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "exporter_disabled_simple_processor",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "LogExporterWithFuture",
            "value": 92,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "LogExporterWithoutFuture",
            "value": 87,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "log_noop_processor",
            "value": 85,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "log_cloning_processor",
            "value": 179,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "log_clone_and_send_to_channel_processor",
            "value": 465,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddNoAttrs",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddOneAttr",
            "value": 50,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddThreeAttr",
            "value": 99,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddFiveAttr",
            "value": 151,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddTenAttr",
            "value": 310,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddOneTillMaxAttr",
            "value": 46401,
            "range": "± 817",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddMaxAttr",
            "value": 94910,
            "range": "± 518",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddInvalidAttr",
            "value": 71,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddSingleUseAttrs",
            "value": 206,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddSingleUseInvalid",
            "value": 273,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddSingleUseFiltered",
            "value": 292,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/CollectOneAttr",
            "value": 223,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/CollectTenAttrs",
            "value": 513,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record0Attrs10bounds",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record3Attrs10bounds",
            "value": 130,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record5Attrs10bounds",
            "value": 189,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record7Attrs10bounds",
            "value": 253,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record10Attrs10bounds",
            "value": 344,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record0Attrs49bounds",
            "value": 42,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record3Attrs49bounds",
            "value": 138,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record5Attrs49bounds",
            "value": 197,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record7Attrs49bounds",
            "value": 263,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record10Attrs49bounds",
            "value": 358,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record0Attrs50bounds",
            "value": 42,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record3Attrs50bounds",
            "value": 138,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record5Attrs50bounds",
            "value": 197,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record7Attrs50bounds",
            "value": 261,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record10Attrs50bounds",
            "value": 351,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record0Attrs1000bounds",
            "value": 60,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record3Attrs1000bounds",
            "value": 155,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record5Attrs1000bounds",
            "value": 213,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record7Attrs1000bounds",
            "value": 283,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record10Attrs1000bounds",
            "value": 374,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/CollectOne",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/CollectFive",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/CollectTen",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/CollectTwentyFive",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Counter_Add_Sorted",
            "value": 180,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Counter_Add_Unsorted",
            "value": 185,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Counter_Add_Sorted_With_Non_Static_Values",
            "value": 260,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Counter_Overflow",
            "value": 550,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ThreadLocal_Random_Generator_5",
            "value": 10,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Gauge_Add",
            "value": 196,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram_Record",
            "value": 212,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram_Record_With_Non_Static_Values",
            "value": 294,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-simple/always-sample",
            "value": 378,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-simple/never-sample",
            "value": 117,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-span-builder/always-sample",
            "value": 379,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-span-builder/never-sample",
            "value": 168,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-tracer-in-span/always-sample",
            "value": 517,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-tracer-in-span/never-sample",
            "value": 174,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-tracer-in-span-with-builder/always-sample",
            "value": 484,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-tracer-in-span-with-builder/never-sample",
            "value": 223,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-simple-context-activation/always-sample",
            "value": 489,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-simple-context-activation/never-sample",
            "value": 88,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-span-builder-context-activation/always-sample",
            "value": 480,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-span-builder-context-activation/never-sample",
            "value": 140,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span_builder/simplest",
            "value": 124,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span_builder/with_attributes/1",
            "value": 143,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span_builder/with_attributes/4",
            "value": 173,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span/always-sample",
            "value": 233,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span/never-sample",
            "value": 120,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-4-attrs/always-sample",
            "value": 294,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-4-attrs/never-sample",
            "value": 152,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-8-attrs/always-sample",
            "value": 394,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-8-attrs/never-sample",
            "value": 186,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-all-attr-types/always-sample",
            "value": 308,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-all-attr-types/never-sample",
            "value": 162,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-all-attr-types-2x/always-sample",
            "value": 424,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-all-attr-types-2x/never-sample",
            "value": 207,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Tracer_With_Name/new_each_time",
            "value": 28,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Tracer_With_Name/reuse_existing",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Tracer_With_Name_And_Scope_Attrs/new_each_time",
            "value": 66,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Tracer_With_Name_And_Scope_Attrs/reuse_existing",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "xofyarg",
            "username": "xofyarg",
            "email": "xofyarg@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "75a0b7e673b4f650159f0cecfd5471e3647aa693",
          "message": "fix(sdk): prevent overdrain race in batch span/log export (#3441)\n\nCo-authored-by: Lalit Kumar Bhasin <lalit_fin@yahoo.com>",
          "timestamp": "2026-04-14T05:16:29Z",
          "url": "https://github.com/scottgerring/opentelemetry-rust/commit/75a0b7e673b4f650159f0cecfd5471e3647aa693"
        },
        "date": 1776150324602,
        "tool": "cargo",
        "benches": [
          {
            "name": "CreateOTelValueString",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelAnyValueString",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelValueInt",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelAnyValueInt",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelKey_Static",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelKey_Owned",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelKey_Arc",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelKeyValue",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateTupleKeyValue",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOtelKeyValueArray",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOtelKeyValueArrayWithMixedValueTypes",
            "value": 13,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOtelKeyValueArrayWithNonStaticValues",
            "value": 96,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateTupleKeyValueArray",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "set_baggage_static_key_value",
            "value": 28,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "set_baggage_static_key",
            "value": 52,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "set_baggage_dynamic",
            "value": 69,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "set_baggage_dynamic_with_metadata",
            "value": 107,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/single_cx/empty_cx",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/nested_cx/empty_cx",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/out_of_order_cx_drop/empty_cx",
            "value": 35,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/single_cx/single_value_cx",
            "value": 21,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/nested_cx/single_value_cx",
            "value": 41,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/out_of_order_cx_drop/single_value_cx",
            "value": 39,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/single_cx/span_cx",
            "value": 21,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/nested_cx/span_cx",
            "value": 40,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/out_of_order_cx_drop/span_cx",
            "value": 40,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "telemetry_suppression/enter_telemetry_suppressed_scope",
            "value": 23,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "telemetry_suppression/normal_attach",
            "value": 25,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "telemetry_suppression/is_current_telemetry_suppressed_false",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "telemetry_suppression/is_current_telemetry_suppressed_true",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "NoAttributes",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "AddWithInlineStaticAttributes",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "AddWithStaticArray",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "AddWithDynamicAttributes",
            "value": 95,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "AddWithDynamicAttributes_WithStringAllocation",
            "value": 87,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "otel_2_attributes",
            "value": 273,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "log_no_subscriber",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "ot_layer_enabled",
            "value": 265,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ot_layer_disabled",
            "value": 14,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "noop_layer_enabled",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "noop_layer_disabled",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "log_1_attr_no_span",
            "value": 226,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "log_1_attr_in_span_2_attr",
            "value": 686,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "log_1_attr_in_nested_spans_2plus2_attr",
            "value": 1092,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "span_4_attributes",
            "value": 275,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "span_8_attributes",
            "value": 412,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "nested_spans_1_levels",
            "value": 288,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "nested_spans_2_levels",
            "value": 666,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "nested_spans_3_levels",
            "value": 1048,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "BatchSpanProcessor/with 1 concurrent task",
            "value": 542889,
            "range": "± 22873",
            "unit": "ns/iter"
          },
          {
            "name": "BatchSpanProcessor/with 2 concurrent task",
            "value": 574658,
            "range": "± 7337",
            "unit": "ns/iter"
          },
          {
            "name": "BatchSpanProcessor/with 4 concurrent task",
            "value": 618008,
            "range": "± 8543",
            "unit": "ns/iter"
          },
          {
            "name": "BatchSpanProcessor/with 8 concurrent task",
            "value": 751076,
            "range": "± 13910",
            "unit": "ns/iter"
          },
          {
            "name": "BatchSpanProcessor/with 16 concurrent task",
            "value": 1051092,
            "range": "± 21109",
            "unit": "ns/iter"
          },
          {
            "name": "BatchSpanProcessor/with 32 concurrent task",
            "value": 1614413,
            "range": "± 41884",
            "unit": "ns/iter"
          },
          {
            "name": "context/has_active_span/in-cx/alt",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_sampled/in-cx/alt",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_recording/in-cx/alt",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/has_active_span/in-cx/spec",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_sampled/in-cx/spec",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_recording/in-cx/spec",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/has_active_span/no-cx/alt",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_sampled/no-cx/alt",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_recording/no-cx/alt",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/has_active_span/no-cx/spec",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_sampled/no-cx/spec",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_recording/no-cx/spec",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/has_active_span/no-sdk/alt",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_sampled/no-sdk/alt",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_recording/no-sdk/alt",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/has_active_span/no-sdk/spec",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_sampled/no-sdk/spec",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_recording/no-sdk/spec",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Logger_Creation",
            "value": 13,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "LoggerProvider_Creation",
            "value": 4467,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "Logging_Comparable_To_Appender",
            "value": 91,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log/no-context",
            "value": 52,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log/with-context",
            "value": 53,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-int/no-context",
            "value": 65,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-int/with-context",
            "value": 67,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-double/no-context",
            "value": 65,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-double/with-context",
            "value": 67,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-string/no-context",
            "value": 65,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-string/with-context",
            "value": 66,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-bool/no-context",
            "value": 67,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-bool/with-context",
            "value": 68,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-bytes/no-context",
            "value": 88,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-bytes/with-context",
            "value": 90,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-a-lot-of-bytes/no-context",
            "value": 89,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-a-lot-of-bytes/with-context",
            "value": 91,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-vec-any-value/no-context",
            "value": 114,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-vec-any-value/with-context",
            "value": 117,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-inner-vec-any-value/no-context",
            "value": 176,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-inner-vec-any-value/with-context",
            "value": 178,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-map-any-value/no-context",
            "value": 137,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-map-any-value/with-context",
            "value": 146,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-inner-map-any-value/no-context",
            "value": 223,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-inner-map-any-value/with-context",
            "value": 224,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "long-log/no-context",
            "value": 52,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "long-log/with-context",
            "value": 53,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "full-log/no-context",
            "value": 27,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "full-log/with-context",
            "value": 30,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "full-log-with-4-attributes/no-context",
            "value": 74,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "full-log-with-4-attributes/with-context",
            "value": 76,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "full-log-with-9-attributes/no-context",
            "value": 138,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "full-log-with-9-attributes/with-context",
            "value": 141,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "full-log-with-attributes/no-context",
            "value": 242,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "full-log-with-attributes/with-context",
            "value": 267,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "exporter_disabled_concurrent_processor",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "exporter_disabled_simple_processor",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "LogExporterWithFuture",
            "value": 95,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "LogExporterWithoutFuture",
            "value": 90,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "log_noop_processor",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "log_cloning_processor",
            "value": 174,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "log_clone_and_send_to_channel_processor",
            "value": 468,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddNoAttrs",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddOneAttr",
            "value": 47,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddThreeAttr",
            "value": 101,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddFiveAttr",
            "value": 158,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddTenAttr",
            "value": 314,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddOneTillMaxAttr",
            "value": 44440,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddMaxAttr",
            "value": 94198,
            "range": "± 1464",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddInvalidAttr",
            "value": 71,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddSingleUseAttrs",
            "value": 206,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddSingleUseInvalid",
            "value": 275,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddSingleUseFiltered",
            "value": 293,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/CollectOneAttr",
            "value": 223,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/CollectTenAttrs",
            "value": 510,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record0Attrs10bounds",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record3Attrs10bounds",
            "value": 131,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record5Attrs10bounds",
            "value": 187,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record7Attrs10bounds",
            "value": 255,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record10Attrs10bounds",
            "value": 339,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record0Attrs49bounds",
            "value": 42,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record3Attrs49bounds",
            "value": 139,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record5Attrs49bounds",
            "value": 196,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record7Attrs49bounds",
            "value": 262,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record10Attrs49bounds",
            "value": 346,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record0Attrs50bounds",
            "value": 42,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record3Attrs50bounds",
            "value": 140,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record5Attrs50bounds",
            "value": 195,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record7Attrs50bounds",
            "value": 262,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record10Attrs50bounds",
            "value": 346,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record0Attrs1000bounds",
            "value": 60,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record3Attrs1000bounds",
            "value": 156,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record5Attrs1000bounds",
            "value": 215,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record7Attrs1000bounds",
            "value": 278,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record10Attrs1000bounds",
            "value": 371,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/CollectOne",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/CollectFive",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/CollectTen",
            "value": 15,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/CollectTwentyFive",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Counter_Add_Sorted",
            "value": 177,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Counter_Add_Unsorted",
            "value": 181,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "Counter_Add_Sorted_With_Non_Static_Values",
            "value": 262,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Counter_Overflow",
            "value": 542,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "ThreadLocal_Random_Generator_5",
            "value": 10,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Gauge_Add",
            "value": 183,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram_Record",
            "value": 206,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram_Record_With_Non_Static_Values",
            "value": 284,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-simple/always-sample",
            "value": 390,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-simple/never-sample",
            "value": 115,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-span-builder/always-sample",
            "value": 386,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-span-builder/never-sample",
            "value": 175,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-tracer-in-span/always-sample",
            "value": 532,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-tracer-in-span/never-sample",
            "value": 185,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-tracer-in-span-with-builder/always-sample",
            "value": 480,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-tracer-in-span-with-builder/never-sample",
            "value": 224,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-simple-context-activation/always-sample",
            "value": 489,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-simple-context-activation/never-sample",
            "value": 88,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-span-builder-context-activation/always-sample",
            "value": 482,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-span-builder-context-activation/never-sample",
            "value": 144,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span_builder/simplest",
            "value": 132,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span_builder/with_attributes/1",
            "value": 143,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span_builder/with_attributes/4",
            "value": 180,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span/always-sample",
            "value": 228,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span/never-sample",
            "value": 113,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-4-attrs/always-sample",
            "value": 293,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-4-attrs/never-sample",
            "value": 153,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-8-attrs/always-sample",
            "value": 403,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-8-attrs/never-sample",
            "value": 185,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-all-attr-types/always-sample",
            "value": 306,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-all-attr-types/never-sample",
            "value": 163,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-all-attr-types-2x/always-sample",
            "value": 424,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-all-attr-types-2x/never-sample",
            "value": 206,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Tracer_With_Name/new_each_time",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Tracer_With_Name/reuse_existing",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Tracer_With_Name_And_Scope_Attrs/new_each_time",
            "value": 67,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "Tracer_With_Name_And_Scope_Attrs/reuse_existing",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Cijo Thomas",
            "username": "cijothomas",
            "email": "cijo.thomas@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c9923793652d03c20ccfaf39cfa9273243152843",
          "message": "docs: Improve getting-started example discoverability (#3479)",
          "timestamp": "2026-05-04T13:34:54Z",
          "url": "https://github.com/scottgerring/opentelemetry-rust/commit/c9923793652d03c20ccfaf39cfa9273243152843"
        },
        "date": 1778052389842,
        "tool": "cargo",
        "benches": [
          {
            "name": "CreateOTelValueString",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelAnyValueString",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelValueInt",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelAnyValueInt",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelKey_Static",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelKey_Owned",
            "value": 14,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelKey_Arc",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelKeyValue",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateTupleKeyValue",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOtelKeyValueArray",
            "value": 13,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOtelKeyValueArrayWithMixedValueTypes",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOtelKeyValueArrayWithNonStaticValues",
            "value": 99,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "CreateTupleKeyValueArray",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "set_baggage_static_key_value",
            "value": 26,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "set_baggage_static_key",
            "value": 65,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "set_baggage_dynamic",
            "value": 86,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "set_baggage_dynamic_with_metadata",
            "value": 101,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/single_cx/empty_cx",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/nested_cx/empty_cx",
            "value": 39,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/out_of_order_cx_drop/empty_cx",
            "value": 36,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/single_cx/single_value_cx",
            "value": 25,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/nested_cx/single_value_cx",
            "value": 48,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/out_of_order_cx_drop/single_value_cx",
            "value": 41,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/single_cx/span_cx",
            "value": 25,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/nested_cx/span_cx",
            "value": 48,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/out_of_order_cx_drop/span_cx",
            "value": 41,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "telemetry_suppression/enter_telemetry_suppressed_scope",
            "value": 24,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "telemetry_suppression/normal_attach",
            "value": 28,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "telemetry_suppression/is_current_telemetry_suppressed_false",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "telemetry_suppression/is_current_telemetry_suppressed_true",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateLogRecord_NoopLogger",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateLogRecord_NoopLogger_WithAttributes",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateLogRecord_NoopLogger_WithBody",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateLogRecord_NoopLogger_Full",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "EventEnabled_NoopLogger",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "NoAttributes",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "AddWithInlineStaticAttributes",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "AddWithStaticArray",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "AddWithDynamicAttributes",
            "value": 97,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "AddWithDynamicAttributes_WithStringAllocation",
            "value": 88,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateSpan_NoopTracer",
            "value": 50,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateSpan_NoopTracer_4Attributes",
            "value": 51,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateSpan_NoopTracer_AddEvent",
            "value": 50,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateSpan_NoopTracer_AddLink",
            "value": 50,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateSpan_NoopTracer_SetActive",
            "value": 96,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "CreateSpan_NoopTracer_WithActiveParent",
            "value": 150,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateSpan_NoopTracer_InSpan",
            "value": 107,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "SpanBuilder_Creation",
            "value": 28,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "SpanBuilder_WithAttributes",
            "value": 74,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "SpanBuilder_WithLinks",
            "value": 70,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "otel_2_attributes",
            "value": 285,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "log_no_subscriber",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "ot_layer_enabled",
            "value": 279,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ot_layer_disabled",
            "value": 14,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "noop_layer_enabled",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "noop_layer_disabled",
            "value": 9,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "log_1_attr_no_span",
            "value": 259,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "log_1_attr_in_span_2_attr",
            "value": 771,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "log_1_attr_in_nested_spans_2plus2_attr",
            "value": 1187,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "span_4_attributes",
            "value": 282,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "span_8_attributes",
            "value": 424,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "nested_spans_1_levels",
            "value": 298,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "nested_spans_2_levels",
            "value": 675,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "nested_spans_3_levels",
            "value": 1061,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "BatchSpanProcessor/with 1 concurrent task",
            "value": 555721,
            "range": "± 5282",
            "unit": "ns/iter"
          },
          {
            "name": "BatchSpanProcessor/with 2 concurrent task",
            "value": 593655,
            "range": "± 11477",
            "unit": "ns/iter"
          },
          {
            "name": "BatchSpanProcessor/with 4 concurrent task",
            "value": 615235,
            "range": "± 6009",
            "unit": "ns/iter"
          },
          {
            "name": "BatchSpanProcessor/with 8 concurrent task",
            "value": 797071,
            "range": "± 11540",
            "unit": "ns/iter"
          },
          {
            "name": "BatchSpanProcessor/with 16 concurrent task",
            "value": 1152853,
            "range": "± 14801",
            "unit": "ns/iter"
          },
          {
            "name": "BatchSpanProcessor/with 32 concurrent task",
            "value": 1817819,
            "range": "± 49125",
            "unit": "ns/iter"
          },
          {
            "name": "context/has_active_span/in-cx/alt",
            "value": 7,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_sampled/in-cx/alt",
            "value": 7,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_recording/in-cx/alt",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/has_active_span/in-cx/spec",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_sampled/in-cx/spec",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_recording/in-cx/spec",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/has_active_span/no-cx/alt",
            "value": 7,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_sampled/no-cx/alt",
            "value": 7,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_recording/no-cx/alt",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/has_active_span/no-cx/spec",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_sampled/no-cx/spec",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_recording/no-cx/spec",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/has_active_span/no-sdk/alt",
            "value": 7,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_sampled/no-sdk/alt",
            "value": 7,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_recording/no-sdk/alt",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/has_active_span/no-sdk/spec",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_sampled/no-sdk/spec",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context/is_recording/no-sdk/spec",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Logger_Creation",
            "value": 14,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "LoggerProvider_Creation",
            "value": 4855,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "Logging_Comparable_To_Appender",
            "value": 95,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log/no-context",
            "value": 56,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log/with-context",
            "value": 57,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-int/no-context",
            "value": 72,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-int/with-context",
            "value": 72,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-double/no-context",
            "value": 72,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-double/with-context",
            "value": 73,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-string/no-context",
            "value": 73,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-string/with-context",
            "value": 73,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-bool/no-context",
            "value": 71,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-bool/with-context",
            "value": 72,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-bytes/no-context",
            "value": 95,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-bytes/with-context",
            "value": 95,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-a-lot-of-bytes/no-context",
            "value": 98,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-a-lot-of-bytes/with-context",
            "value": 96,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-vec-any-value/no-context",
            "value": 123,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-vec-any-value/with-context",
            "value": 123,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-inner-vec-any-value/no-context",
            "value": 185,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-inner-vec-any-value/with-context",
            "value": 188,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-map-any-value/no-context",
            "value": 153,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-map-any-value/with-context",
            "value": 153,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-inner-map-any-value/no-context",
            "value": 237,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "simple-log-with-inner-map-any-value/with-context",
            "value": 240,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "long-log/no-context",
            "value": 56,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "long-log/with-context",
            "value": 56,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "full-log/no-context",
            "value": 29,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "full-log/with-context",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "full-log-with-4-attributes/no-context",
            "value": 84,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "full-log-with-4-attributes/with-context",
            "value": 87,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "full-log-with-9-attributes/no-context",
            "value": 165,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "full-log-with-9-attributes/with-context",
            "value": 166,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "full-log-with-attributes/no-context",
            "value": 282,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "full-log-with-attributes/with-context",
            "value": 274,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "exporter_disabled_simple_processor",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "LogExporterWithFuture",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "LogExporterWithoutFuture",
            "value": 94,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "log_noop_processor",
            "value": 90,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "log_cloning_processor",
            "value": 186,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "log_clone_and_send_to_channel_processor",
            "value": 549,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddNoAttrs",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddOneAttr",
            "value": 48,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddThreeAttr",
            "value": 101,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddFiveAttr",
            "value": 145,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddTenAttr",
            "value": 275,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddOneTillMaxAttr",
            "value": 38011,
            "range": "± 354",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddMaxAttr",
            "value": 76436,
            "range": "± 420",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddInvalidAttr",
            "value": 69,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddSingleUseAttrs",
            "value": 212,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddSingleUseInvalid",
            "value": 302,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/AddSingleUseFiltered",
            "value": 322,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/CollectOneAttr",
            "value": 230,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "Counter/CollectTenAttrs",
            "value": 539,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record0Attrs10bounds",
            "value": 25,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record3Attrs10bounds",
            "value": 138,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record5Attrs10bounds",
            "value": 184,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record7Attrs10bounds",
            "value": 235,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record10Attrs10bounds",
            "value": 313,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record0Attrs49bounds",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record3Attrs49bounds",
            "value": 144,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record5Attrs49bounds",
            "value": 193,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record7Attrs49bounds",
            "value": 244,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record10Attrs49bounds",
            "value": 321,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record0Attrs50bounds",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record3Attrs50bounds",
            "value": 144,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record5Attrs50bounds",
            "value": 193,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record7Attrs50bounds",
            "value": 243,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record10Attrs50bounds",
            "value": 321,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record0Attrs1000bounds",
            "value": 42,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record3Attrs1000bounds",
            "value": 162,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record5Attrs1000bounds",
            "value": 216,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record7Attrs1000bounds",
            "value": 268,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/Record10Attrs1000bounds",
            "value": 355,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/CollectOne",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/CollectFive",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/CollectTen",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram/CollectTwentyFive",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Counter_Add_Sorted",
            "value": 170,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Counter_Add_Unsorted",
            "value": 175,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Counter_Add_Sorted_With_Non_Static_Values",
            "value": 246,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Counter_Overflow",
            "value": 555,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ThreadLocal_Random_Generator_5",
            "value": 11,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Gauge_Add",
            "value": 192,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram_Record",
            "value": 200,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Histogram_Record_With_Non_Static_Values",
            "value": 274,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-simple/always-sample",
            "value": 391,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-simple/never-sample",
            "value": 130,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-span-builder/always-sample",
            "value": 413,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-span-builder/never-sample",
            "value": 183,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-tracer-in-span/always-sample",
            "value": 550,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-tracer-in-span/never-sample",
            "value": 194,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-tracer-in-span-with-builder/always-sample",
            "value": 529,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-tracer-in-span-with-builder/never-sample",
            "value": 247,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-simple-context-activation/always-sample",
            "value": 540,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-simple-context-activation/never-sample",
            "value": 104,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-span-builder-context-activation/always-sample",
            "value": 524,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "span-creation-span-builder-context-activation/never-sample",
            "value": 153,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "span_builder/simplest",
            "value": 134,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span_builder/with_attributes/1",
            "value": 165,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "span_builder/with_attributes/4",
            "value": 191,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span/always-sample",
            "value": 245,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span/never-sample",
            "value": 122,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-4-attrs/always-sample",
            "value": 313,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-4-attrs/never-sample",
            "value": 170,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-8-attrs/always-sample",
            "value": 416,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-8-attrs/never-sample",
            "value": 202,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-all-attr-types/always-sample",
            "value": 328,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-all-attr-types/never-sample",
            "value": 183,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-all-attr-types-2x/always-sample",
            "value": 446,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "start-end-span-all-attr-types-2x/never-sample",
            "value": 225,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Tracer_With_Name/new_each_time",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Tracer_With_Name/reuse_existing",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Tracer_With_Name_And_Scope_Attrs/new_each_time",
            "value": 72,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Tracer_With_Name_And_Scope_Attrs/reuse_existing",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Cijo Thomas",
            "username": "cijothomas",
            "email": "cijo.thomas@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ec289cb3c6f8260951699c51df968560943c1451",
          "message": "chore: Prepare for release v0.32.0 (#3508)",
          "timestamp": "2026-05-08T23:28:58Z",
          "url": "https://github.com/scottgerring/opentelemetry-rust/commit/ec289cb3c6f8260951699c51df968560943c1451"
        },
        "date": 1778484863839,
        "tool": "cargo",
        "benches": [
          {
            "name": "CreateOTelValueString",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelAnyValueString",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelValueInt",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelAnyValueInt",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelKey_Static",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelKey_Owned",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelKey_Arc",
            "value": 15,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOTelKeyValue",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateTupleKeyValue",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOtelKeyValueArray",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOtelKeyValueArrayWithMixedValueTypes",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateOtelKeyValueArrayWithNonStaticValues",
            "value": 97,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "CreateTupleKeyValueArray",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "set_baggage_static_key_value",
            "value": 26,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "set_baggage_static_key",
            "value": 62,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "set_baggage_dynamic",
            "value": 87,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "set_baggage_dynamic_with_metadata",
            "value": 103,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/single_cx/empty_cx",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/nested_cx/empty_cx",
            "value": 37,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/out_of_order_cx_drop/empty_cx",
            "value": 36,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/single_cx/single_value_cx",
            "value": 25,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/nested_cx/single_value_cx",
            "value": 46,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/out_of_order_cx_drop/single_value_cx",
            "value": 41,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/single_cx/span_cx",
            "value": 26,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/nested_cx/span_cx",
            "value": 45,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "context_attach/out_of_order_cx_drop/span_cx",
            "value": 41,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "telemetry_suppression/enter_telemetry_suppressed_scope",
            "value": 25,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "telemetry_suppression/normal_attach",
            "value": 28,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "telemetry_suppression/is_current_telemetry_suppressed_false",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "telemetry_suppression/is_current_telemetry_suppressed_true",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateLogRecord_NoopLogger",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateLogRecord_NoopLogger_WithAttributes",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateLogRecord_NoopLogger_WithBody",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateLogRecord_NoopLogger_Full",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "EventEnabled_NoopLogger",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "NoAttributes",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "AddWithInlineStaticAttributes",
            "value": 15,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "AddWithStaticArray",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "AddWithDynamicAttributes",
            "value": 98,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "AddWithDynamicAttributes_WithStringAllocation",
            "value": 86,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "CreateSpan_NoopTracer",
            "value": 50,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateSpan_NoopTracer_4Attributes",
            "value": 51,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateSpan_NoopTracer_AddEvent",
            "value": 50,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateSpan_NoopTracer_AddLink",
            "value": 50,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "CreateSpan_NoopTracer_SetActive",
            "value": 98,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "CreateSpan_NoopTracer_WithActiveParent",
            "value": 154,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "CreateSpan_NoopTracer_InSpan",
            "value": 107,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "SpanBuilder_Creation",
            "value": 28,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "SpanBuilder_WithAttributes",
            "value": 74,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "SpanBuilder_WithLinks",
            "value": 70,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "otel_2_attributes",
            "value": 281,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "log_no_subscriber",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "ot_layer_enabled",
            "value": 275,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ot_layer_disabled",
            "value": 14,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "noop_layer_enabled",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "noop_layer_disabled",
            "value": 7,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "log_1_attr_no_span",
            "value": 236,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "log_1_attr_in_span_2_attr",
            "value": 712,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "log_1_attr_in_nested_spans_2plus2_attr",
            "value": 1161,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "span_4_attributes",
            "value": 282,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "span_8_attributes",
            "value": 425,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "nested_spans_1_levels",
            "value": 298,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "nested_spans_2_levels",
            "value": 671,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "nested_spans_3_levels",
            "value": 1058,
            "range": "± 5",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}