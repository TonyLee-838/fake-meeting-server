module.exports = (error, req, res, next) => {
  console.log("error: ", error);
  const message = error.message;

  // if (process.env.NODE_ENV === "development")
  //   console.warn("Error Detected!: ", message, error.stack);

  if (message.startsWith("ValidationError"))
    return res.status(400).send(message);

  if (message.startsWith("AuthenticationError"))
    return res.status(401).send(message);

  if (message.startsWith("UnauthorizeError"))
    return res.status(403).send(message);

  if (message.startsWith("NotFoundError")) return res.status(404).send(message);

  const internalError = { message: "InternalServerError", stack: error.stack };
  res.status(500).send(internalError);
};
