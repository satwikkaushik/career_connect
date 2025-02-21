import express from "express";
import { router as homeRouter } from "./routes/home.js";

const PORT = 5000;

const app = express();

app.use("/", homeRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
