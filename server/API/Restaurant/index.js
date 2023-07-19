import { restaurantModel } from "../../database/allModel";
import express from "express";
import {
  validateRestaurantCity,
  validateRestaurantSearchString,
} from "../../Validation/restaurant";

import { validateRestaurantId } from "../../Validation/food";
const Router = express.Router();

/*
Route         /
Descrip       Get All Restaurant Details based on city
Params        None
Access        Public
Method        GET
*/

Router.get("/", async (req, res) => {
  try {
    await validateRestaurantCity(req.query); //don't use the defined object to give city
    const { city } = req.query;

    const restaurants = await restaurantModel.find({ city }); //included in {} as it should be like this city:city
    return res.json({ restaurants });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route         /
Descrip       Get Particular Restaurant Details
Params        _id
Access        Public
Method        GET
*/

Router.get("/:_id", async (req, res) => {
  try {
    await validateRestaurantId(req.params);
    const { _id } = req.params;

    const restaurant = await restaurantModel.findOne(_id);

    if (!restaurant)
      return res.status(404).json({ error: "Restaurant Not Found" });

    return res.json({ restaurant });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route         /
Descrip       Get Restaurant Details by Search
Params        None
Body          searchString
Access        Public
Method        GET
*/

Router.get("/search", async (req, res) => {
  try {
    await validateRestaurantSearchString(req.body);
    const { searchString } = req.body;

    const restaurants = await restaurantModel.find({
      name: { $regex: searchString, $options: "i" }, // "i" is to reject case sensitive
    });
    return res.json({ restaurants });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/*
Route         /
Descrip       Add Restaurant Details
Params        None
Access        Public
Method        POST
*/

Router.post("/", async (req, res) => {
  try {
    const restaurantData = req.body.credentials;
    await restaurantModel.create(restaurantData);
    return res.status(200).json({ status: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
export default Router;
