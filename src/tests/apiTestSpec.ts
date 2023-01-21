import app from '../index';
import supertest from 'supertest';
const request = supertest(app);

describe('test api', () => {
  it('check api images working in the right way and response status=200', async () => {
    const res = await request.get(
      '/api/images?filename=downloa&height=200&width=200'
    );
    expect(res.status).toBe(200);
  });
});
