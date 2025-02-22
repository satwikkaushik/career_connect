import { Student } from "../models/student.js";

export async function createStudent(details) {
  try {
    await Student.create(details);
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
}
