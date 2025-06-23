const { validationResult } = require('express-validator');
const itemService = require('../services/itemService');
const logger = require('../utils/logger');

exports.getAll = (req, res) => {
  logger.info('Fetching all items');
  res.json(itemService.getAll());
};

exports.getById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const item = itemService.getById(id);
  if (!item) {
    logger.warn(`Item not found: ${id}`);
    return res.status(404).json({ error: 'Item not found' });
  }
  res.json(item);
};

exports.create = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    logger.warn('Validation failed', errors.array());
    return res.status(400).json({ errors: errors.array() });
  }
  const item = itemService.create(req.body);
  logger.info('Item created', item);
  res.status(201).json(item);
};

exports.update = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    logger.warn('Validation failed', errors.array());
    return res.status(400).json({ errors: errors.array() });
  }
  const item = itemService.update(id, req.body);
  if (!item) {
    logger.warn(`Item not found for update: ${id}`);
    return res.status(404).json({ error: 'Item not found' });
  }
  logger.info('Item updated', item);
  res.json(item);
};

exports.delete = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const success = itemService.delete(id);
  if (!success) {
    logger.warn(`Item not found for delete: ${id}`);
    return res.status(404).json({ error: 'Item not found' });
  }
  logger.info(`Item deleted: ${id}`);
  res.status(204).send();
};
