const app = require("./app");

const { env } = require("./helper/config");
const port = env("port") || 3003;

const server = app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
module.exports = server;
