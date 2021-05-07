import request from 'supertest'
import { app } from '../app'

describe('test app server', () => {
  it('should get active server', async () => {
    const result = await request(app).get('/')

    expect(result.statusCode).toEqual(200)
    expect(result.body).toHaveProperty('api')
  })
})
