import express from "express";
import { orderModel } from "../../database/orders";
import passport from "passport";

const Router = express.Router();

/*
Route         /
Descrip       Get all orders based on _id
Params        _id
Access        Public
Method        GET
*/

Router.get(
  "/:_id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { _id } = req.params;
      const getOrders = await orderModel.findOne({ user: _id });

      if (!getOrders) return res.status(404).json({ error: "User Not Found" });
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  }
);

/*
Route         /new/:_id
Descrip       Add new order
Params        _id
Access        Public
Method        POST
*/

Router.post("/new/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const { orderDetails } = req.body;
    const addNewOrder = await orderModel.findOneAndUpdate(
      { user: _id },
      { $push: { orderDetails: orderDetails } },
      { new: true }
    );

    return res.json({ order: addNewOrder });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});
export default Router;
