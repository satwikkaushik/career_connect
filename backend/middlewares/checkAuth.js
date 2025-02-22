export async function checkAuth(req, res, next) {
  if (req.user) {
    console.log(`User is authenticated: ${req.user.name}, ${req.user.role}`);
  } else {
    console.log("User is not authenticated");
  }

  next();
}
