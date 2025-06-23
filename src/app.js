const express = require('express');
const { port } = require('./config/env');
const healthRoutes = require('./routes/healthRoutes');
const helloRoutes = require('./routes/helloRoutes');
const itemRoutes = require('./routes/itemRoutes');
const logger = require('./utils/logger');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const app = express();

app.use(express.json());

// Swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Request logging
app.use((req, res, next) => {
  logger.info({ method: req.method, url: req.url, body: req.body }, 'Incoming request');
  next();
});

app.use(healthRoutes);
app.use(helloRoutes);
app.use(itemRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Error logging
app.use((err, req, res, next) => {
  logger.error({ err }, 'Unhandled error');
  res.status(500).json({ error: 'Internal server error' });
});

module.exports = app;
