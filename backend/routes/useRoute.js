import express from "express";
import User from "../modules/useModel";

const router = express.Router();

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const signinUser = await User.findOne({
      email,
      password,
    });
    if (signinUser) {
      res.send({
        _id: signinUser.id,
        name: signinUser.name,
        email: signinUser.email,
        isAdmin: signinUser.isAdmin,
        token: getToken(signinUser),
      });
    } else {
      res.status(401).send({ msg: "invalid email or password" });
    }
  } catch (error) {
    res.send({ msg: error.message });
  }
});

router.get("/createadmin", async (req, res) => {
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
export default router;
 