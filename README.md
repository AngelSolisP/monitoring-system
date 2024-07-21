# Monitoring System with Grafana and Prometheus

## Installation and Configuration

### Prerequisites
- Docker
- Docker-Compose

### Setup
1. Clone the repository.
2. Navigate to the project directory.
3. Run `docker-compose up` to start Prometheus, Grafana, and the Node.js application.
4. Access Grafana at `http://localhost:3000` and configure Prometheus as a data source:
   - Navigate to **Configuration > Data Sources > Add data source**.
   - Select Prometheus and set the URL to `http://prometheus:9090`.
5. Create dashboards in Grafana to visualize metrics.

## Exposing Metrics
The Node.js service exposes metrics at `/metrics`.

### Example Endpoints
- `GET /todos` - Retrieve a list of todos.
- `GET /metrics` - Expose Prometheus metrics.

## Repository Structure
- `index.js` - Main Node.js application file.
- `Dockerfile` - Dockerfile for building the Node.js application.
- `docker-compose.yml` - Docker Compose configuration.
- `prometheus.yml` - Prometheus configuration file.
