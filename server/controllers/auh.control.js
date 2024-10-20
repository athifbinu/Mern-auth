import User from "../models/user_model.js";
import bycriptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const sinup = async (req, res, next) => {
  const { username, email, password } = req.body;
  //this line useed to bycript the password
  const hashedPassword = bycriptjs.hashSync(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(errorHandler, 300, "something is wrong");
  }
};
