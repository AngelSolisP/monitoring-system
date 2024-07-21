const express = require('express');
const promClient = require('prom-client');

const app = express();
const register = new promClient.Registry();

// Enable default metrics collection
promClient.collectDefaultMetrics({ register });

// Example endpoint to demonstrate application functionality
app.get('/todos', (req, res) => {
  res.json([
    { id: 1, task: 'Buy groceries' },
    { id: 2, task: 'Clean the house' }
  ]);
});

// Endpoint to expose Prometheus metrics
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
