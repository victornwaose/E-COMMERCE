import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data";
import Product from "../modules/productModel";

const productRouter = express.Router();

productRouter.get('/seed', expressAsyncHandler(async(req, res)=>{
    try{
         const createdProducts = await Product.insertMany(data.products);
    res.send(createdProducts) 
    }catch(err){
        console.log(err)
    }
    
  
}))

export default productRouter;