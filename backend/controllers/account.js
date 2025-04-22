import {
      createStudent,
      loginStudent,
      generateAuthTokenStudent,
} from "../services/authStudent.js";

import {
      createUni,
      loginUni,
      generateAuthTokenUni,
} from "../services/authUni.js";

export async function getStudent(req, res) {
      const { email, password } = req.body;

      if (!email || !password) {
            return res.status(400).end("Missing required fields");
      }

      try {
            const student = await loginStudent({
                  email: email,
                  password: password,
            });
            const token = await generateAuthTokenStudent(student);

            res.cookie("token", token, { httpOnly: true, sameSite: "strict" });

            return res
                  .status(200)
                  .end(
                        `Student Logged In!, UniRollNo: ${student.uniRollNo},id: ${student._id}`
                  );
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
            console.log(error);
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
            const uniUser = await loginUni({
                  email: email,
                  password: password,
            });
            const token = await generateAuthTokenUni(uniUser);

            res.cookie("token", token, { httpOnly: true, sameSite: "strict" });

            return res
                  .status(200)
                  .end(
                        `University User Logged In!, EmployeeId: ${uniUser.employeeId}`
                  );
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
            return res
                  .status(500)
                  .end("Internal Server Error, failed to create user");
      }
}

export async function signoutUser(req, res) {
      res.clearCookie("token");
      return res.end("User Signed Out");
}

export async function getStudentProfile(req, res) {
      try {
            // Assuming you have middleware that adds user to req object
            const student = req.user;
            if (!student) {
                  return res.status(401).end("Unauthorized");
            }

            return res.status(200).json({
                  name: student.name,
                  email: student.email,
                  role: "student",
                  uniRollNo: student.uniRollNo,
                  course: student.course,
                  branch: student.branch,
                  semester: student.semester,
            });
      } catch (error) {
            return res.status(500).end("Internal Server Error");
      }
}

export async function getUniProfile(req, res) {
      try {
            // Assuming you have middleware that adds user to req object
            const uniUser = req.user;
            if (!uniUser) {
                  return res.status(401).end("Unauthorized");
            }

            return res.status(200).json({
                  name: uniUser.name,
                  email: uniUser.email,
                  role: "admin",
                  employeeId: uniUser.employeeId,
            });
      } catch (error) {
            return res.status(500).end("Internal Server Error");
      }
}
