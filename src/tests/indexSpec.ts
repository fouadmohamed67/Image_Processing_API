import app from '../index';
import supertest from 'supertest';
import resize_image from '../utils/resize';
import validate from '../utils/validate';
import middleWareImage from '../middleware/apiMiddleware';
const request=supertest(app)

describe("test api",()=>{
  it("check api images working in the right way",async()=>{
    const res=await request.get('/api/images?filename=downloa&height=200&width=200')
    expect(res.status).toBe(200)
  })
})

describe("test resize function",()=>{
  it("check if resizing image working in the right way",async()=>{
    expect(await resize_image("download","500","500")).toBeTrue()
  })
})

describe("test validation function",()=>{
  it("check if validate image is exist in full folder",async()=>{
   expect( await validate.checImageExist("download","full")).toBeTrue()
  })
  it("check if validate image is exist in thumb folder",async()=>{
    expect( await validate.checImageExist("download_500_500","thumb")).toBeTrue()
   })
})

describe("test width and height are valid",()=>{
  it("check if width or height is number and positive",()=>{
    expect(validate.checkISPositiveNumber("500")).toBeTrue()
  })
})


 