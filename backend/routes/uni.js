import express from "express";
import {
  setNewJob,
  setJobByID,
  getJobs,
  getJobByID,
} from "../controllers/uni.js";

import { isAuthorizedAsUni } from "../middlewares/isAuthorized.js";

export const router = express.Router();

router.use(isAuthorizedAsUni);

// implemented this function
router.post("/jobs/new", (req, res) => {
  return setNewJob(req, res);
});

router.get("/jobs", (req, res) => {
  return getJobs(req, res);
});

// router.get("/jobs/:id", (req, res) => {
//   return getJobByID(req, res);
// });

router.post("/jobs/:id", (req, res) => {
  return setJobByID(req, res);
});
