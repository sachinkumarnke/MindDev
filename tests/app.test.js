const request = require('supertest');
const mongoose = require('mongoose');

// Mock the database connection
jest.mock('../config/database', () => ({
  __esModule: true,
  default: jest.fn()
}));

describe('Minddev Blog API', () => {
  let app;

  beforeAll(() => {
    // Mock mongoose connection
    mongoose.connect = jest.fn().mockResolvedValue();
    
    // Import app after mocking
    app = require('../server');
  });

  afterAll(async () => {
    if (mongoose.connection.readyState !== 0) {
      await mongoose.connection.close();
    }
  });

  describe('Health Check', () => {
    test('GET /health should return 200', async () => {
      const response = await request(app)
        .get('/health')
        .expect(200);

      expect(response.body).toHaveProperty('status', 'OK');
      expect(response.body).toHaveProperty('timestamp');
    });
  });

  describe('Blog Routes', () => {
    test('GET / should return homepage', async () => {
      const response = await request(app)
        .get('/')
        .expect(200);

      expect(response.text).toContain('Minddev');
    });
  });
});