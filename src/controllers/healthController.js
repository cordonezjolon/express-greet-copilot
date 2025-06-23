const healthService = require('../services/healthService');

exports.getHealth = (req, res) => {
  res.json(healthService.getStatus());
};
