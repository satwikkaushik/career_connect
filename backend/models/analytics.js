import mongoose from "mongoose";

const Schema = mongoose.Schema({
  job_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
    required: true,
  },
  applied_students: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Student",
    required: true,
  },
  selected_students: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Student",
    required: false,
  },
});

export const Analytics = mongoose.model("Analytics", Schema);
