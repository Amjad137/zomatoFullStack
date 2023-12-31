import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    food: { type: mongoose.Types.ObjectId, ref: "Foods" },
    restaurant: { type: mongoose.Types.ObjectId, ref: "Restaurants" },
    user: { type: mongoose.Types.ObjectId, ref: "Users" },
    rating: { type: Number, required: true },
    reviewText: { type: String, required: true },
    isRestaurantReview: { type: Boolean },
    isFoodReview: { type: Boolean },
    photos: [{ type: mongoose.Types.ObjectId, ref: "Images" }],
  },
  {
    timestamps: true,
  }
);

export const reviewModel = mongoose.model("Reviews", reviewSchema);
