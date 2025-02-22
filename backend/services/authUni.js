import bcrypt from "bcrypt";
import { University } from "../models/university.js";

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
