// import mongoose from "mongoose";

// const imagesSchema = mongoose.Schema(
//   {
//     restaurantImages: [
//       {
//         name: { type: String, required: true },
//         location: { type: String, required: true },
//       },
//     ],
//     foodImages: [
//       {
//         name: { type: String, required: true },
//         location: { type: String, required: true },
//       },
//     ],
//   },
//   {
//     timestamps: true,
//   }
// );

// export const ImageModel = mongoose.model("Images", imagesSchema);
import mongoose from "mongoose";

const imagesSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
  },

  {
    timestamps: true,
  }
);

export const ImageModel = mongoose.model("Images", imagesSchema);
