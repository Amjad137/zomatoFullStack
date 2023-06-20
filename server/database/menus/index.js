import mongoose from "mongoose";

const menuSchema = mongoose.Schema(
  {
    menus: [
      {
        name: { type: String, required: true },
        items: [
          {
            type: mongoose.Types.ObjectId,
            ref: "Foods",
          },
        ],
      },
    ],
    recommended: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Foods",
        unique: true,
      },
    ],
  },
  { timestamps: true }
);

export const menuModel = mongoose.model("Menus", menuSchema);
