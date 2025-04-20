import express from "express";
import {
  getAllAnalytics,
  getAnalyticsByJobID,
  setStudentApplied,
  setStudentSelected,
} from "../controllers/analytics.js";

import {
  isAuthorizedAsStudent,
  isAuthorizedAsUni,
} from "../middlewares/isAuthorized.js";

export const router = express.Router();

router.get("/", isAuthorizedAsUni, (req, res) => {
  return getAllAnalytics(req, res);
});

router.get("/jobs/:id", isAuthorizedAsUni, (req, res) => {
  return getAnalyticsByJobID(req, res);
});

router.post("/studentApplied", isAuthorizedAsStudent, (req, res) => {
  return setStudentApplied(req, res);
});

router.post("/studentSelected", isAuthorizedAsStudent, (req, res) => {
  return setStudentSelected(req, res);
});
