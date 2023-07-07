import express from "express";
import passport from "passport";
import { foodModel } from "../../database/allModel";
import { validateRestaurantId, validateCategory } from "../../Validation/food";
const Router = express.Router();

/*
Route         /
Descrip       Get All Foods Based on Restaurants
Params        _id
Access        Public
Method        GET
*/

Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    await validateRestaurantId(_id);
    const foods = await foodModel.find({ restaurant: _id });

    if (foods) {
      return res.json({ foods });
    } else {
      return res.json({ error: "No Foods Available" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route         /r
Descrip       Get All Foods Based on Categories
Params        category
Access        Public
Method        GET
*/

Router.get("/r/:category", async (req, res) => {
  try {
    const { category } = req.params;
    await validateCategory(category);
    const foods = await foodModel.find({
      category: { $regex: category, $options: "i" },
    });

    if (foods) {
      return res.json({ foods });
    } else {
      return res.json({ error: "No Foods Available" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
export default Router;
