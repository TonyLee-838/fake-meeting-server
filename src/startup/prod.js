const helmet = require("helmet");
const express = require("express");
const cors = require("cors");

module.exports = (app) => {
  app.use(helmet());
  app.use(cors());
  app.use(express.json());
};
