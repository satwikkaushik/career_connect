import jwt from "jsonwebtoken";

export function validateAuthToken(cookieName = "token") {
  return async (req, res, next) => {
    try {
      const userToken = req.cookies[cookieName];
      if (userToken) {
        const payload = await validateToken(userToken);
        req.user = payload;
      }
    } catch (err) {
    } finally {
      next();
    }
  };
}

async function validateToken(token) {
  const secret = process.env.JWT_SECRET;
  try {
    const data = await jwt.verify(token, secret);
    console.log("JWT Payload: ", data);
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error.message);
  }
}
