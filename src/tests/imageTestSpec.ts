import validate from '../utils/validate';

describe("test validation function",()=>{
  it("check if validate image is exist in full folder",async()=>{
   expect( await validate.checImageExist("download","full")).toBeTrue()
  })
  it("check if validate image is exist in thumb folder",async()=>{
    expect( await validate.checImageExist("download_500_500","thumb")).toBeTrue()
   })
})


 