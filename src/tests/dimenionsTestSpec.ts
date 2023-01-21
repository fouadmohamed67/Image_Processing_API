
import validate from '../utils/validate';

describe("test width and height are valid",()=>{
  it("check if width or height is number and positive",()=>{
    expect(validate.checkISPositiveNumber("500")).toBeTrue()
  })
})


 