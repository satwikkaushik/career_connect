import bcrypt from "bcrypt";
import { University } from "../models/university.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

export async function createUni(details) {
  try {
    // hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(details.password, salt);

    details.password = hashedPassword;

    await University.create(details);
    return Promise.resolve("University User Register");
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function loginUni(details) {
  try {
    const uniUser = await University.findOne({
      email: details.email,
    });

    if (!uniUser) {
      return Promise.reject("Invalid Credentials");
    }

    const isPasswordCorrect = await bcrypt.compare(
      details.password,
      uniUser.password
    );

    if (!isPasswordCorrect) {
      return Promise.reject("Invalid Credentials");
    }

    return Promise.resolve(uniUser);
  } catch (error) {
    return Promise.reject(error.message);
  }
}

export async function generateAuthTokenUni(uniUser) {
  if (!uniUser) {
    return Promise.reject("Invalid Credentials");
  }

  const payload = {
    _id: uniUser._id,
    employeeId: uniUser.employeeId,
    name: uniUser.name,
    email: uniUser.email,
    department: uniUser.department,
    designation: uniUser.designation,
    role: "uni",
  };

  const secret = process.env.JWT_SECRET;

  const token = jwt.sign(payload, secret);
  return token;
}
