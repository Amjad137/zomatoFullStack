import express from "express";
// import { userModel } from "../../database/users";
import { userModel } from "../../database/allModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const Router = express.Router();

/*
Route         /signup
Descrip       Signup with email and password
Params        None
Access        Public
Method        POST
*/

Router.post("/signup", async (req, res) => {
  try {
    // const checkUserbyEmail = await userModel.findOne({ email });
    // const checkUserbyPhone = await userModel.findOne({ phoneNumber });

    // if (checkUserbyEmail || checkUserbyPhone) {
    //   return res.json({ error: " User Already Exist" });

    await userModel.findEmailandPhone(req.body.credentials);

    // hashing and salting
    // const bcryptSalt = await bcrypt.genSalt(8);

    // const hashedPassword = await bcrypt.hash(password, bcryptSalt);

    //DB
    const newUser = await userModel.create(req.body.credentials);

    //JWT
    // const token = jwt.sign({ user: { fullName, email } }, "ZomatoApp");
    const token = newUser.generateJwtToken();
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
