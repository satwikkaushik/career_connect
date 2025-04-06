import express from "express";
import {
  getStudent,
  postStudent,
  getUni,
  postUni,
  signoutUser,
} from "../controllers/account.js";

export const router = express.Router();

router.post("/student/login", (req, res) => {
  return getStudent(req, res);
});

router.post("/student/singup", (req, res) => {
  return postStudent(req, res);
});

router.get("/uni", (req, res) => {
  return getUni(req, res);
});

router.post("/uni", (req, res) => {
  return postUni(req, res);
});

router.get("/signout", (req, res) => {
  return signoutUser(req, res);
});
