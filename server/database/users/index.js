import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String },
  address: [{ detail: { type: String }, for: { type: string } }],
  phoneNumber: { type: Number }, //was added in array
});

export const UserModel = mongoose.model("Users", userSchema);
