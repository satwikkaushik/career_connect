export async function getStudent(req, res) {
  return res.end("Student Login");
}

export async function postStudent(req, res) {
  return res.end("Student Register");
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
