import { restaurantModel } from "../../database/allModel";
import express from "express";

const Router = express.Router();

/*
Route         /
Descrip       Get All Restaurant Details
Params        None
Access        Public
Method        GET
*/

Router.get("/", async (req, res) => {
  try {
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
    const { searchString } = req.body;
    const restaurants = await restaurantModel.find({
      name: { $regex: searchString, $options: "i" }, // "i" is to reject case sensitive
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
export default Router;
