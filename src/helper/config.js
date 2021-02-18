const config = require("config");

const env = (path) => {
  const key = config.has(path) ? config.get(path) : path;
  return process.env[key];
};

module.exports = { env };
