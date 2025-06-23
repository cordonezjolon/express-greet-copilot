/**
 * @swagger
 * tags:
 *   - name: Hello
 *     description: Greeting endpoints
 * /hello:
 *   get:
 *     summary: Returns a hello message
 *     tags: [Hello]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: false
 *         description: Name to greet
 *     responses:
 *       200:
 *         description: Hello message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Hello, Copilot!
 */

const express = require('express');
const router = express.Router();
const helloController = require('../controllers/helloController');

router.get('/hello', helloController.sayHello);

module.exports = router;
