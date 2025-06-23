const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express Greet Copilot API',
      version: '1.0.0',
      description: 'API documentation for Express Greet Copilot',
    },
    servers: [
      { url: 'http://localhost:3000', description: 'Local server' }
    ],
    tags: [
      { name: 'Health', description: 'Health check endpoints' },
      { name: 'Hello', description: 'Greeting endpoints' },
      { name: 'Items', description: 'CRUD for items' }
    ]
  },
  apis: ['./src/routes/*.js', './src/models/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
