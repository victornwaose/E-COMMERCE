import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data";
import Product from "../modules/productModel";

const productRouter = express.Router(); 

productRouter.get('/', expressAsyncHandler(async (req,res)=>{
    const products = await Product.find({});
    res.send(products);
    console.log(products, "products")
}));


productRouter.get('/seed', expressAsyncHandler(async(req, res)=>{
    try{
         const createdProducts = await Product.insertMany(data.products);
    res.send(createdProducts) 
    }catch(err){
        console.log(err)
    } 
}));

productRouter.get('/:id', expressAsyncHandler(async(req,res) => {
    try{
     const product = await Product.findById(req.params.id);
    if (product){
        res.send(product)
    }else {
        res.status(404).send({message:"Product Not Found"})
    }
    }catch(err) {
        console.log(err);
    }
}))

export default productRouter;