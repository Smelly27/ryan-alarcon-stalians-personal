const request = require('supertest');
const express = require('express');
const app = express();

// Simple setup to mimic your server routes
app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

describe('GET /', () => {
  it('responds with 200 status code', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });

  it('responds with "Hello World!"', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello World!');
  });
});
