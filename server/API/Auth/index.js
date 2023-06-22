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
    const { email, password, fullName, phoneNumber } = req.body.credentials;

    const checkUserbyEmail = await userModel.findOne({ email });
    const checkUserbyPhone = await userModel.findOne({ phoneNumber });

    if (checkUserbyEmail || checkUserbyPhone) {
      return res.json({ error: " User Already Exist" });
    }

    // hashing and salting
    const bcryptSalt = await bcrypt.genSalt(8);

    const hashedPassword = await bcrypt.hash(password, bcryptSalt);

    //DB
    await userModel.create({
      ...req.body.credentials,
      password: hashedPassword,
    });

    //JWT
    const token = jwt.sign({ user: { fullName, email } }, "ZomatoApp");

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
