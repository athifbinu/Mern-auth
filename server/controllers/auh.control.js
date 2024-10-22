import User from "../models/user_model.js";
import bycriptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

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

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const ValidUser = await User.findOne({ email });
    if (!ValidUser) return next(errorHandler(404, -"user not found"));
    const ValidPassowd = bycriptjs.compareSync(password, ValidUser.password);
    if (!ValidUser) return next(errorHandler(404, -"wrong credintuials"));
  } catch (error) {
    next(error);
  }
};
