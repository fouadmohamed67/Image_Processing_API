import express from "express" 
import converter from "./routes/api/converter"
import middleWare from "./middleware/apiMiddleware"
const app=express()

app.use('/api',middleWare,converter)
app.listen(5000,()=>{
  console.log("hello")
})

export default app