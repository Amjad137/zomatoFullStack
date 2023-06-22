import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
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

//JWT
userSchema.methods.generateJwtToken = function () {
  return jwt.sign({ user: this._id.toString() }, "ZomatoApp");
};

userSchema.statics.findEmailandPhone = async ({ email, phoneNumber }) => {
  const checkUserbyEmail = await userModel.findOne({ email });
  const checkUserbyPhone = await userModel.findOne({ phoneNumber });

  if (checkUserbyEmail || checkUserbyPhone) {
    throw new Error("User Already Exists"); //return can't be used in statics
  }

  return false;
};

userSchema.pre("save", function (next) {
  const user = this;
  //password is not modified
  if (!user.isModified("password")) return next();

  //generating bcrypt salt
  bcrypt.genSalt(8, (error, salt) => {
    if (error) return next(error);

    //hashing the password
    bcrypt.hash(user.password, salt, (error, hash) => {
      if (error) return next(error);

      //assigning hashed password
      user.password = hash;
      return next();
    });
  });
});
export const userModel = mongoose.model("Users", userSchema);
