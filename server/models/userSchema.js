import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Provide Your Name!"],
    minLength: [3, "Please Enter At Least 3 Characters!"],
    maxLength: [15, "Please Enter Less Than 15 Characters!"],
  },
  email: {
    type: String,
    required: [true, "Please Provide Your Email!"],
    validate: [validator.isEmail, "Please Provide A Valid Email!"],
  },
  phone: {
    type: Number,
    required: [true, "Please Provide Your phone Number!"],
  },
  password: {
    type: String,
    select: false,
    required: [true, "Please Provode Your Password"],
    minLength: [8, "Please Enter At Least 8 Characters Password!"],
    maxLength: [20, "Please Enter Less Than 20 Characters Password!"],
  },
  role: {
    type: String,
    enum: ["Job Seeker", "Employer"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

// user entered password making hashed password
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    next;
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// comparing user enterd password with hashed password
userSchema.methods.comparePassoword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// for creating JWT token for each user
userSchema.methods.createJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

export const User = mongoose.model("User", userSchema);
