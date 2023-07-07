import express from "express";
import { reviewModel } from "../../database/reviews";
import { userModel } from "../../database/users";
const Router = express.Router();

/*
Route         /:_id
Descrip       Get user data
Params        _id
Access        Public
Method        GET
*/

Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const getUser = await userModel.findById(_id);
    return res.json({ user: getUser });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

/*
Route         /:_id
Descrip       Update user data
Params        _userId
Access        Public
Method        PUT
*/

Router.put("/update/:_userId", async (req, res) => {
  try {
    const { _userId } = req.params;
    const { userData } = req.body;
    const updateUserData = await userModel.findByIdAndUpdate(
      _userId,
      {
        $set: userData,
      },
      { new: true }
    );
    return res.json({ user: updateUserData });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

export default Router;
