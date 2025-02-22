import { createStudent } from "../services/createStudent.js";

export async function getStudent(req, res) {
  return res.end("Student Login");
}

export async function postStudent(req, res) {
  const {
    uniRollNo,
    name,
    email,
    password,
    password_salt,
    course,
    branch,
    semester,
  } = req.body;

  if (
    !uniRollNo ||
    !name ||
    !email ||
    !password ||
    !course ||
    !branch ||
    !semester
  ) {
    return res.status(400).end("Missing required fields");
  }

  try {
    await createStudent({
      uniRollNo,
      name,
      email,
      password,
      password_salt,
      course,
      branch,
      semester,
    });
    return res.status(200).end("Student Register");
  } catch (error) {
    return res
      .status(500)
      .end("Internal Server Error, failed to create student");
  }
}

export async function getUni(req, res) {
  return res.end("University Login");
}

export async function postUni(req, res) {
  return res.end("University Register");
}

export async function signoutUser(req, res) {
  res.clearCookie("token");
  return res.end("User Signed Out");
}
