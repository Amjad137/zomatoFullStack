import express from "express";
import { reviewModel } from "../../database/reviews";

const Router = express.Router();

/*
Route         /new
Descrip       Add new review
Params        None
Body          Review Object
Access        Public
Method        POST
*/

Router.post("/new", async (req, res) => {
  try {
    const { reviewData } = req.body;
    await reviewModel.create(reviewData);

    return res.json({ review: "Successfully Created Review" });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

/*
Route         /delete
Descrip       Delete review
Params        /:_id
Access        Public
Method        DEL
*/

Router.delete("/delete/:id", async (req, res) => {
  try {
    const { _id } = req.params;
    await reviewModel.findByIdAndDelete(_id);

    return res.json({ review: "Successfully Deleted Review" });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});
export default Router;
