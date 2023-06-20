import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "Users",
    },
    orderDetails: [
      {
        food: { type: mongoose.Types.ObjectId, ref: "Foods" },
        quantity: { type: Number, required: true },
        payMode: { type: String, required: true },
        status: { type: String, required: true, default: "placed" },
        paymentDetails: {
          itemTotal: { type: Number, required: true },
          promo: { type: Number, required: true },
          tax: { type: Number, required: true },
        },
      },
    ],
    orderRatings: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export const orderModel = mongoose.model("Orders", orderSchema);
