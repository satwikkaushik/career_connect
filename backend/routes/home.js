import express from "express";
import { landing } from "../controllers/home.js";

export const router = express.Router();

router.get("/", (req, res) => {
  return landing(req, res);
});
