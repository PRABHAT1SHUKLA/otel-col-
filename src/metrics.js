const { MeterProvider } = require('@opentelemetry/sdk-metrics');
const { OTLPMetricExporter } = require('@opentelemetry/exporter-metrics-otlp-http');

const metricExporter = new OTLPMetricExporter({
  url: 'http://localhost:4318/v1/metrics', // Prometheus OTLP endpoint
});

const meterProvider = new MeterProvider({
  exporter: metricExporter,
  interval: 1000,
});

const meter = meterProvider.getMeter('node-otel-demo');

const requestCounter = meter.createCounter('http_requests_total', {
  description: 'Total number of HTTP requests',
});

module.exports = { meter, requestCounter };
