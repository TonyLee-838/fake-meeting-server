const jwt = require("jsonwebtoken");
const { env } = require("../helper/config");

const auth = (req, res, next) => {
  const token = req.header("x-auth-token");

  try {
    if (!token) {
      return next(
        new Error("AuthenticationError: Access denied. No token provided!")
      );
    }
    const payload = jwt.verify(token, env("jwt_secret_key"));
    req.user = payload;
    next();
  } catch (error) {
    next(new Error("AuthenticationError: Invalid token provided."));
  }
};

module.exports = auth;
