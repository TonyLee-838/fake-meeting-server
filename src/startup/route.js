const auth = require("../routers/auth");
const meeting = require("../routers/meeting");
const notification = require("../routers/notification");
const member = require("../routers/member");
const user = require("../routers/user");

const error = require("../middlewares/error");

module.exports = function (app) {
  app.use("/api/auth", auth);
  app.use("/api/meetings", meeting);
  app.use("/api/notifications", notification);
  app.use("/api/members", member);
  app.use("/api/user", user)
  app.use(error);
};
