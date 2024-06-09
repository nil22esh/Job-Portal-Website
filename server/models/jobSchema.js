import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Provide Title Field!"],
    minLength: [3, "Title Must Contain At Least 3 Characters!"],
    maxLength: [20, "Title Can't Contain More Than 20 Characters!"],
  },
  description: {
    type: String,
    required: [true, "Please Provide Description Field!"],
    minLength: [10, "Description Must Contain At Least 10 Characters!"],
    maxLength: [500, "Description Can't Contain More Than 50 Characters!"],
  },
  category: {
    type: String,
    required: [true, "Please Provide Your Job Category!"],
  },
  country: {
    type: String,
    required: [true, "Please Provide Job Country!"],
  },
  city: {
    type: String,
    required: [true, "Please Provide Job City!"],
  },
  location: {
    type: String,
    required: [true, "Please Provide Exact Location!"],
    minLength: [20, "Location Must Contain At Least 20 Characters!"],
  },
  fixedSalary: {
    type: Number,
    minLength: [4, "Fixed Salary Must Contain At Least 4 Digits!"],
    maxLength: [9, "Fixed Salary Can't Contain More Than 9 Digits!"],
  },
  salaryFrom: {
    type: Number,
    minLength: [4, "Salary From Must Contain At Least 4 Digits!"],
    maxLength: [9, "Salary From Can't Contain More Than 9 Digits!"],
  },
  salaryTo: {
    type: Number,
    minLength: [4, "Salary To Must Contain At Least 4 Digits!"],
    maxLength: [9, "Salary To Can't Contain More Than 9 Digits!"],
  },
  expired: {
    type: Boolean,
    default: false,
  },
  jobPostedOn: {
    type: Date,
    default: Date.now(),
  },
  postedBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

export const Job = mongoose.model("Job", jobSchema);
