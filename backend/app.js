import express from "express";
import { router as homeRoute } from "./routes/home.js";
import { router as studentRoute } from "./routes/student.js";
import "dotenv/config";

const PORT = process.env.PORT || 5000;

const app = express();

app.use("/", homeRoute);
app.use("/student", studentRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
