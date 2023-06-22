import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String },
    address: [{ detail: { type: String }, for: { type: String } }],
    phoneNumber: [{ type: Number }], //was added in array
  },
  {
    timestamps: true,
  }
);

export const userModel = mongoose.model("Users", userSchema);
