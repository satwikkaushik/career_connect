import { createStudent, loginStudent } from "../services/authStudent.js";
import { createUni, loginUni } from "../services/authUni.js";

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
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).end("Missing required fields");
  }

  try {
    const uniUser = await loginUni({ email: email, password: password });
    return res
      .status(200)
      .end(`University User Logged In!, EmployeeId: ${uniUser.employeeId}`);
  } catch (error) {
    return res.status(401).end(error);
  }
}

export async function postUni(req, res) {
  const { employeeId, name, email, password, department, designation } =
    req.body;

  if (
    !employeeId ||
    !name ||
    !email ||
    !password ||
    !department ||
    !designation
  ) {
    return res.status(400).end("Missing required fields");
  }

  try {
    await createUni({
      employeeId,
      name,
      email,
      password,
      department,
      designation,
    });
    return res.status(200).end("University User Register");
  } catch (error) {
    return res.status(500).end("Internal Server Error, failed to create user");
  }
}

export async function signoutUser(req, res) {
  res.clearCookie("token");
  return res.end("User Signed Out");
}
