import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user_route.js";
import authRoutes from "./routes/auth_routh.js";
dotenv.config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("db connected succesfully");
}).catch;
(err) => {
  console.log("db error", err);
};
app.listen(4000, () => {
  console.log("server started port 4000");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
