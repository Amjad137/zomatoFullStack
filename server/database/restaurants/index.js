import mongoose from "mongoose";

const restaurantSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String },
    mapLocation: { type: String },
    cuisine: [String],
    restaurantTiming: String,
    contactNumber: Number,
    webSite: String,
    popularDishes: [String],
    averageCost: Number,
    amenities: [String],
    menuImages: { type: mongoose.Types.ObjectId, ref: "Foods" },
    // menu: { type: mongoose.Types.ObjectId, ref: "Menus" },
    menu: { type: String },
    reviews: [{ type: mongoose.Types.ObjectId, ref: "Reviews" }],
    photos: { type: mongoose.Types.ObjectId, ref: "Images" },
  },
  { timestamps: true }
);

export const restaurantModel = mongoose.model("Restaurants", restaurantSchema);
