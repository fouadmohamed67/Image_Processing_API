import express from 'express';
import validate from '../../utils/validate';
import resize_image from '../../utils/resize';
import { Request, Response } from 'express';
import fs from 'fs'; 
var path = require('path');
const Router=express.Router();

Router.get('/images',async(req:Request,res:Response)=>{
        let width = req.query.width+""
        let height= req.query.height+""
        let filename=req.query.filename+""
        const result=await  validate.checImageExist(filename,"full")
        const result_width=await  validate.checkISPositiveNumber(width)
        const result_height=await  validate.checkISPositiveNumber(height)
        
        if(result && result_height && result_width)
        {
            const resCahedImage=await  validate.checImageExist(filename+"_"+height+"_"+width,"thumb")
            
            if(resCahedImage)
            {
                console.log("exist before ")
                res.sendFile(path.resolve('src/images/thumb/'+filename+"_"+height+"_"+width+'.png'));
            }
            else
            {
              console.log("resize image and then store at thumb")
              await  resize_image(filename,width,height)
              res.sendFile(path.resolve('src/images/thumb/'+filename+"_"+height+"_"+width+'.png'));

            }

        }
        else
        {
            res.send({"message":" invalid parametrs in Url"})
        }
        
    
})

export default Router