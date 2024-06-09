import mongoose from "mongoose";
import validator from "validator";
// import isEmail from "validator/lib/isEmail";

const applicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Provide Your Name!"],
    minLength: [3, "Name Must Contain At Least 3 Characters!"],
    maxLength: [30, "Name Cannot Contain More Than 30 Characters!"],
  },
  email: {
    type: String,
    required: [true, "Please Provide Your Email!"],
    validator: [validator.isEmail, "Please Fill A Valid Email!"],
  },
  coverLetter: {
    type: String,
    required: [true, "Please Provide Your Cover Letter!"],
  },
  phone: {
    type: Number,
    required: [true, "Please Provide Your Phone Number!"],
  },
  address: {
    type: String,
    required: [true, "Please Provide Your Address!"],
  },
  resume: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  applicantId: {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["Job Seeker"],
    },
  },
  employerId: {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["Employer"],
    },
  },
});

export const Application = mongoose.model("Application", applicationSchema);
