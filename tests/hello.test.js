const request = require('supertest');
const app = require('../src/app');

describe('GET /hello', () => {
  it('should greet with provided name', async () => {
    const res = await request(app).get('/hello?name=Copilot');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Hello, Copilot!');
  });

  it('should greet with default if no name', async () => {
    const res = await request(app).get('/hello');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Hello, World!');
  });
});
