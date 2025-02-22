import { createStudent, loginStudent } from "../services/authStudent.js";

export async function getStudent(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).end("Missing required fields");
  }

  try {
    const student = await loginStudent({ email: email, password: password });
    return res
      .status(200)
      .end(`Student Logged In!, UniRollNo: ${student.uniRollNo}`);
  } catch (error) {
    return res.status(401).end(error);
  }
}

export async function postStudent(req, res) {
  const { uniRollNo, name, email, password, course, branch, semester } =
    req.body;

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
