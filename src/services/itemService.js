const itemModel = require('../models/itemModel');

class ItemService {
  getAll() {
    return itemModel.findAll();
  }
  getById(id) {
    return itemModel.findById(id);
  }
  create(data) {
    return itemModel.create(data);
  }
  update(id, data) {
    return itemModel.update(id, data);
  }
  delete(id) {
    return itemModel.delete(id);
  }
}

module.exports = new ItemService();
