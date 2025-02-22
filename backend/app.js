import express from "express";
import { router as homeRoute } from "./routes/home.js";
import { router as studentRoute } from "./routes/student.js";
import { router as uniRoute } from "./routes/uni.js";
import { router as accountRoute } from "./routes/account.js";

import "dotenv/config";

const PORT = process.env.PORT || 5000;

const app = express();

app.use("/", homeRoute);
app.use("/account", accountRoute);
app.use("/student", studentRoute);
app.use("/uni", uniRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
