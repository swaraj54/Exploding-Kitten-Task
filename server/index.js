import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import allRoutes from "./routes/index.js";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

app.use("/api/v1", allRoutes);

mongoose.connect(process.env.MONGODBURL).then(() => {
  console.log("DB connected.");
});

app.listen(8000, () => {
  console.log("Server is listening on port 8000.");
});
