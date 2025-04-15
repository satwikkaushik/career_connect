import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  jobType: {
    type: String,
    enum: ["Internship", "Full Time"],
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  responsibilities: {
    type: [String],
    required: false,
  },
  eligibility: {
    type: [String],
    required: false,
  },
  salary: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  applyLink: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  semester: {
    type: Number,
    required: true,
  },
});

export const Job = mongoose.model("Job", jobSchema);
