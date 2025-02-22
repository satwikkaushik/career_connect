import express from "express";
import {
  landing,
  getJobs,
  getJobByID,
  setJobByID,
  getNewJobForm,
  setNewJobForm,
  getAnalytics,
  getAnalyticsByJobID,
} from "../controllers/uni.js";

export const router = express.Router();

router.get("/", (req, res) => {
  return landing(req, res);
});

router.get("/jobs", (req, res) => {
  return getJobs(req, res);
});

router.get("/jobs/new", (req, res) => {
  return createJobForm(req, res);
});

router.post("/jobs/new", (req, res) => {
  return createJob(req, res);
});

router.get("/jobs/:id", (req, res) => {
  return getJobByID(req, res);
});

router.post("/jobs/:id", (req, res) => {
  return setJobByID(req, res);
});

router.get("/analytics", (req, res) => {
  return getAnalytics(req, res);
});

router.get("/analytics/:id", (req, res) => {
  return getAnalyticsByJobID(req, res);
});
