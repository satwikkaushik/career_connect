import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { Student } from "../models/student.js";

export async function createStudent(details) {
  try {
    // hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(details.password, salt);

    details.password = hashedPassword;

    await Student.create(details);
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function loginStudent(details) {
  try {
    const student = await Student.findOne({
      email: details.email,
    });

    if (!student) {
      return Promise.reject("Invalid Credentials");
    }

    const isPasswordCorrect = await bcrypt.compare(
      details.password,
      student.password
    );

    if (!isPasswordCorrect) {
      return Promise.reject("Invalid Credentials");
    }

    return Promise.resolve(student);
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function generateAuthTokenStudent(student) {
  if (!student) {
    return Promise.reject("Invalid Credentials");
  }

  const payload = {
    _id: student._id,
    uniRollNo: student.uniRollNo,
    name: student.name,
    email: student.email,
    semester: student.semester,
    branch: student.branch,
    course: student.course,
    role: "student",
  };

  const secret = process.env.JWT_SECRET;

  const token = jwt.sign(payload, secret);
  return token;
}
