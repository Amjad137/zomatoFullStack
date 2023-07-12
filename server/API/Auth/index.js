import express from "express";
import { userModel } from "../../database/allModel";
import { validateSignup, validateSignin } from "../../Validation/auth";
import passport from "passport";
const Router = express.Router();

/*
Route         /signup
Descrip       Signup with email and password
Params        None
Access        Public
Method        POST
*/

Router.post("/signup", async (req, res) => {
  await validateSignup(req.body.credentials);
  await userModel.findEmailandPhone(req.body.credentials);

  //DB
  const newUser = await userModel.create(req.body.credentials);

  //JWT
  const token = newUser.generateJwtToken();
  return res.status(200).json({ token });

  return res.status(500).json({ error: error.message });
});

/*
Route         /signin
Descrip       Signin with email and password
Params        None
Access        Public
Method        POST
*/

Router.post("/signin", async (req, res) => {
  try {
    await validateSignin(req.body.credentials);
    const user = await userModel.findByEmailAndPassword(req.body.credentials);
    //jwt token
    const token = user.generateJwtToken();

    return res.status(200).json({ token, status: "Success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route         /google
Descrip       Google Signin
Params        None
Access        Public
Method        GET
*/

Router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  })
);

/*
Route         /google/callback
Descrip       Google Signin CallBack
Params        None
Access        Public
Method        GET
*/

Router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    return res.json({ token: req.session.passport.user.token });
  }
);
export default Router;
