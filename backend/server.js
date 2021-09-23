import express from "express";
import data from "./data";
import Config from "./config";
import path from "path";
import fileUpload from "express-fileUpload";
import dotenv from "dotenv";
import mongoose from "mongoose";
import useRoute from "./routes/useRoute";
import bodyParser from "body-parser"

dotenv.config();
const mongodbUrl = Config.MONGODB_URL;

mongoose
  .connect(mongodbUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true})
  .catch((error)  => console.log(error)); 

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/users", useRoute);

app.get("/api/products/:_id", (req, res) => {
  const productId = req.params._id;
  console.log(productId);
  const product = data.products.find((x) => {
    return x._id == productId;
  });
  console.log(product);
  if (product) { 
    res.send(product);
  } else {
    res.status(404).send({ msg: "product not found" });
  }
});

app.get("/api/products", (req, res) => {
  res.send(data.products);
});
 
app.listen(5000, () => {
  console.log("server started at http://localhost:5000");
});
