/**
 * @swagger
 * tags:
 *   - name: Health
 *     description: Health check endpoints
 * /health:
 *   get:
 *     summary: Returns health status
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: Health status
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ok
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *                   example: 2025-06-22T18:00:00.000Z
 */
const express = require('express');
const router = express.Router();
const healthController = require('../controllers/healthController');

router.get('/health', healthController.getHealth);

module.exports = router;
