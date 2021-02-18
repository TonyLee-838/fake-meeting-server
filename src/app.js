const express = require("express");
const app = express();

require("dotenv").config();
//startup settings:
require("./startup/prod")(app);
require("./startup/logging")(app);
require("./startup/route")(app);

module.exports = app;
