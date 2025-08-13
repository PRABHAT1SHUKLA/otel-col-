const express = require('express');
const logger = require('./logging');
const { meter, requestCounter } = require('./metrics');

const app = express();
const port = 3000;

// Middleware to count requests
app.use((req, res, next) => {
  requestCounter.add(1, { method: req.method, path: req.path });
  next();
});

// Basic endpoint
app.get('/', (req, res) => {
  logger.info('Handling request to /');
  res.send('Hello, World!');
});

// Counter endpoint
let counter = 0;
app.get('/counter', (req, res) => {
  counter++;
  logger.info(`Counter incremented to ${counter}`);
  res.json({ counter });
});

// Error handling
app.use((err, req, res, next) => {
  logger.error(`Error: ${err.message}`);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  logger.info(`Server running at http://localhost:${port}`);
});
