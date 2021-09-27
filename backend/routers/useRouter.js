import express from "express";
import data from "../data";
import User from "../modules/useModel.js";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import {generateToken} from "../utils";

const userRouter = express.Router();


userRouter.post('/signin', expressAsyncHandler(async(req, res)=>{
   const user = await User.findOne({email: req.body.email});
   if(user){
     if(bcrypt.compareSync(req.body.password, user.password)){
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token:  generateToken(user),
        });
        return;
     }
   }
   res.status(401).send({message: "Invalid email or  password"})
}));

userRouter.post("/register", expressAsyncHandler(async(req, res)=> {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),

  });
  const createdUser = await  user.save();
  res.send({
    _id: createdUser._id,
    name: createdUser.name,
    email: createdUser.email,
    isAdmin: createdUser.isAdmin,
    token:  generateToken(createdUser),
  })
}))

userRouter .get("/createadmin", async (req, res) => {
  try {
    const user = new User({
      name: "victor",
      email: "nwaosevictor12345@gmail.com",
      password: "1234",
      isAdmin: true,
    });
    const newUser = await user.save();
    res.send(newUser);
  } catch (error) {
    res.send({ msg: error.message });
  }
});

userRouter.get('/seed',   expressAsyncHandler(async (req, res) =>{
    const createdUsers = await User.insertMany(data.users) 
    res.send({createdUsers});
}));


export default userRouter;
 