import express from "express";
import Config from "./config";
import path from "path";
import fileUpload from "express-fileUpload";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./routers/useRouter";
import bodyParser from "body-parser"
import productRouter from "./routers/productRouter";

dotenv.config();
const mongodbUrl = Config.MONGODB_URL;

mongoose
  .connect(mongodbUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true})
  .catch((error)  => console.log(error)); 

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use("/api/users", userRouter);
 
app.use("/api/products", productRouter);

app.use((err, req, res, next ) => {
  res.status(500).send({message: err.message});
});
 
app.listen(5000, () => {
  console.log("server started at http://localhost:5000");
});
