import Sharp from 'sharp'
import path from 'path'
const resize_image=async(filename:String,width:String,height:String):Promise<boolean>=>{
    let newWidth:number= +width
    let newheight:number= +height
    let pathimage=path.resolve("src/images/full/"+filename+".png")
   try {
   await  Sharp(pathimage)
    .resize(newWidth,newheight)
    .toFile("src/images/thumb/"+filename+"_"+newheight+"_"+newWidth+'.png')
    return true
   } catch (error) {
    console.log(error)
    return false
   
   } 
}

export default resize_image
