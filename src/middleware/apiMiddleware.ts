import { Request,Response,response } from "express";

const middleWareImage= async (req:Request,res:Response,next:Function):Promise<boolean|void>=>{
   let width = req.query.width
   let height= req.query.height
   let filename=req.query.filename
    if(!width || !height || !filename)
    {
        console.log("error in params")
        return false
    } 
    
    next()
}
export default middleWareImage