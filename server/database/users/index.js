import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const userSchema = mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String },
    address: { type: String },
    phoneNumber: { type: Number }, //was added in array
  },
  {
    timestamps: true,
  }
);

//JWT
userSchema.methods.generateJwtToken = function () {
  return jwt.sign({ user: this._id.toString() }, process.env.JWT_SECRET_KEY, {
    expiresIn: "7d",
  });
};

userSchema.statics.findEmailandPhone = async ({ email, phoneNumber }) => {
  const checkUserbyEmail = await userModel.findOne({ email });
  const checkUserbyPhone = await userModel.findOne({ phoneNumber });

  if (checkUserbyEmail || checkUserbyPhone) {
    throw new Error("User Already Exists"); //return can't be used in statics
  }

  return false;
};

userSchema.statics.findByEmailAndPassword = async ({ email, password }) => {
  //check whether the email exists
  const user = await userModel.findOne({ email });
  if (!user) throw new Error("User Doesn't exist");

  //compare password
  const doesPasswordMatch = await bcrypt.compare(password, user.password);

  if (!doesPasswordMatch) {
    throw new Error("Invalid password");
  }
  return user;
};

userSchema.pre("save", function (next) {
  //middleware function in mongoose  "save" is a predefined operation in mongoose

  const user = this; // an instance variable created to the userSchema,it can access everything of userSchema

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
