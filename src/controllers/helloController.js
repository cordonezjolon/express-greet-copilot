const helloService = require('../services/helloService');

exports.sayHello = (req, res) => {
  const { name } = req.query;
  res.json(helloService.getMessage(name));
};
