require('dotenv').config();
const app = require('../app.js')
// const jest = require('jest')
const request = require('supertest')


describe('GET /api/users', ()=>{

  test('should respond with status code 200', async ()=>{
    const response = await request(app).get('/api/users').send()
    expect(response.statusCode).toBe(200)
  });

  test('should respond with an array of users', async()=>{
    const response = await request(app).get('/api/users').send()
    expect(response.body).toBeInstanceOf(Array)
  })

  test('should respond with status code 200', async ()=>{
    const response = await request(app).get('/api/users/3').send()
    expect(response.statusCode).toBe(200)
  })

  test('should respond with an array of posts', async()=>{
    const response = await request(app).get('/api/users/3').send()
    expect(response.body).toBeInstanceOf(Array)
  })
})
