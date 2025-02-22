import express from "express";
import { landing, getJobs, getExpiredJobs } from "../controllers/student.js";

export const router = express.Router();

router.get("/", (req, res) => {
  return landing(req, res);
});

router.get("/jobs/:id", (req, res) => {
  return getJobs(req, res);
});

router.get("/jobs/expired", (req, res) => {
  return getExpiredJobs(req, res);
});
