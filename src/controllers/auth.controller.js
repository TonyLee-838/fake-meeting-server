const asyncWrapper = require("../middlewares/async");
const { env } = require("../helper/config");
const jwt = require("jsonwebtoken");

const signIn = asyncWrapper(async (req, res) => {
  const token = jwt.sign({ _id: "123", isAdmin: false }, env("jwt_secret_key"));
  res.header("x-auth-token", token);
  res.send(token);
});

module.exports = { signIn };
