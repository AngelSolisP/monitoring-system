# Monitoring System with Grafana and Prometheus

## Installation

1. Install Docker and Docker-Compose.
2. Clone this repository.
3. Navigate to the project directory.

## Configuration

1. Start services:
    ```sh
    docker-compose up
    ```
2. Access Grafana at `http://localhost:3000`.
3. Access Prometheus at `http://localhost:9090`.

## Node.js Application

- Exposes metrics at `/metrics` endpoint.
