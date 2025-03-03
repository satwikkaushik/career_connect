export async function isAuthorizedAsStudent(req, res, next) {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  } else if (req.user.role !== "student") {
    return res.status(403).json({ message: "Unauthorized" });
  } else {
    next();
  }
}

export async function isAuthorizedAsUni(req, res, next) {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  } else if (req.user.role !== "uni") {
    return res.status(403).json({ message: "Unauthorized" });
  } else {
    next();
  }
}
