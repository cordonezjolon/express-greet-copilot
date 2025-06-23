const request = require('supertest');
const app = require('../src/app');

describe('CRUD /items', () => {
  let id;

  it('should create an item', async () => {
    const res = await request(app)
      .post('/items')
      .send({ name: 'Test', value: 123 });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toBe('Test');
    id = res.body.id;
  });

  it('should get all items', async () => {
    const res = await request(app).get('/items');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should get item by id', async () => {
    const res = await request(app).get(`/items/${id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id', id);
  });

  it('should update item', async () => {
    const res = await request(app)
      .put(`/items/${id}`)
      .send({ name: 'Updated', value: 456 });
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('Updated');
  });

  it('should delete item', async () => {
    const res = await request(app).delete(`/items/${id}`);
    expect(res.statusCode).toBe(204);
  });

  it('should return 404 for deleted item', async () => {
    const res = await request(app).get(`/items/${id}`);
    expect(res.statusCode).toBe(404);
  });

  it('should validate input', async () => {
    const res = await request(app).post('/items').send({ value: 'not-a-number' });
    expect(res.statusCode).toBe(400);
    expect(res.body.errors).toBeDefined();
  });
});
