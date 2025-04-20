import express from "express";
import {
      getStudent,
      postStudent,
      getUni,
      postUni,
      signoutUser,
      getStudentProfile,
      getUniProfile,
} from "../controllers/account.js";

export const router = express.Router();

router.post("/student/login", (req, res) => {
      return getStudent(req, res);
});

router.post("/student/signup", (req, res) => {
      return postStudent(req, res);
});

router.post("/uni/login", (req, res) => {
      return getUni(req, res);
});

router.post("/uni/signup", (req, res) => {
      return postUni(req, res);
});

router.get("/signout", (req, res) => {
      return signoutUser(req, res);
});

router.get("/student/profile", (req, res) => {
      return getStudentProfile(req, res);
});

router.get("/uni/profile", (req, res) => {
      return getUniProfile(req, res);
});
