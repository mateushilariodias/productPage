const request = require('supertest');
const server = require('./server'); // Should be correct now

describe('POST /api/products', () => {

  afterEach((done) => {
    server.close(done);
  });

  it('should create a new product', async () => {
    const response = await request(server)
      .post('/api/products')
      .send({
        name: "Produto Teste",
        price: 29.99,
      });

    expect(response.statusCode).toBe(201); // Adjust expectation based on actual response
    // ... additional assertions on response body
  });
});