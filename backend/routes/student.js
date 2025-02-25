import express from "express";
import { getJobs, getJobById, getExpiredJobs } from "../controllers/student.js";
import { isAuthorized } from "../middlewares/isAuthorized.js";

export const router = express.Router();

router.use(isAuthorized);

router.get("/", (req, res) => {
  return getJobs(req, res);
});

router.get("/jobs/:id", (req, res) => {
  return getJobById(req, res);
});

router.get("/jobs/expired", (req, res) => {
  return getExpiredJobs(req, res);
});
