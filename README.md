Node.js OpenTelemetry Demo
This is a simple Node.js application demonstrating observability with OpenTelemetry. It includes tracing, metrics, and logging for a basic Express server.
Features

Tracing: Tracks HTTP request flows using OpenTelemetry and exports to Jaeger.
Metrics: Counts HTTP requests and exports to Prometheus.
Logging: Structured logging with Winston, output to console and file.

Prerequisites

Node.js (v20.x recommended)
Docker (for Jaeger and Prometheus)
WSL Ubuntu

Setup

Clone the repository:git clone <your-repo-url>
cd node-otel-demo


Install dependencies:npm install


(Optional) Start Jaeger and Prometheus with Docker:docker run -d -p 16686:16686 -p 4318:4318 jaegertracing/all-in-one:latest
docker run -d -p 9090:9090 prom/prometheus:latest


Start the application:npm start



Usage

Access the app at http://localhost:3000/.
Visit /counter to increment a counter.
View traces at http://localhost:16686.
View metrics at http://localhost:9090.

Project Structure

src/app.js: Express application logic.
src/tracing.js: OpenTelemetry tracing setup.
src/metrics.js: OpenTelemetry metrics setup.
src/logging.js: Winston logging configuration.

Production Observability
In production, observability involves:

Tracing: Sent to Jaeger, Zipkin, or cloud services like AWS X-Ray.
Metrics: Collected by Prometheus and visualized in Grafana.
Logs: Sent to centralized systems like ELK Stack or Grafana Loki.This project demonstrates the basics of instrumenting a Node.js app for observability.

