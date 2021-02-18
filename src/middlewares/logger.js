const logger = (req, res, next) => {
  // log request.body
  console.log(req.body);
};

module.exports = logger;
