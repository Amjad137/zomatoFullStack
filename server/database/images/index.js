import mongoose from "mongoose";

const imagesSchema = mongoose.Schema(
  {
    images: [
      {
        location: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const ImagesModel = mongoose.model("Images", imagesSchema);
