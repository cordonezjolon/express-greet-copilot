/**
 * @swagger
 * components:
 *   schemas:
 *     Item:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: "Sample Item"
 *         value:
 *           type: number
 *           example: 100
 *     ItemInput:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: "Sample Item"
 *         value:
 *           type: number
 *           example: 100
 *       required:
 *         - name
 *         - value
 */
// Simple in-memory model for demonstration
class ItemModel {
  constructor() {
    this.items = [];
    this.currentId = 1;
  }

  findAll() {
    return this.items;
  }

  findById(id) {
    return this.items.find(item => item.id === id);
  }

  create(data) {
    const item = { id: this.currentId++, ...data };
    this.items.push(item);
    return item;
  }

  update(id, data) {
    const idx = this.items.findIndex(item => item.id === id);
    if (idx === -1) return null;
    this.items[idx] = { ...this.items[idx], ...data };
    return this.items[idx];
  }

  delete(id) {
    const idx = this.items.findIndex(item => item.id === id);
    if (idx === -1) return false;
    this.items.splice(idx, 1);
    return true;
  }
}

module.exports = new ItemModel();
