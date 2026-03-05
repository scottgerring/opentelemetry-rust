window.BENCHMARK_DATA = {
  "lastUpdate": 1772696635249,
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
      }
    ]
  }
}