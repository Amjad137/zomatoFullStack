import express from "express";
import { imageModel, menuModel } from "../../database/allModel";

const Router = express.Router();

/*
Route         /list
Descrip       Get the list of menu based on id
Params        _id
Access        Public
Method        GET
*/

Router.get("/list/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const menus = await menuModel.findOne(_id);
    if (menus) {
      return res.json({ menus });
    } else {
      return res.json({ error: "No Menus Available" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route         /image
Descrip       Get menu image based on id
Params        _id
Access        Public
Method        GET
*/
Router.get("/image/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const menus = await imageModel.findOne(_id);

    if (menus) {
      return res.json({ menus });
    } else {
      return res.json({ error: "No Menus Available" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
export default Router;
