const { NodeSDK } = require('@opentelemetry/sdk-node');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');

const traceExporter = new OTLPTraceExporter({
  url: 'http://localhost:4318/v1/traces', // Jaeger OTLP endpoint
});

const sdk = new NodeSDK({
  traceExporter,
  instrumentations: [getNodeAutoInstrumentations()],
  serviceName: 'node-otel-demo',
});

sdk.start();

process.on('SIGTERM', () => {
  sdk.shutdown().then(() => console.log('Tracing terminated'), (err) => console.error('Error terminating tracing', err));
});

module.exports = sdk;
