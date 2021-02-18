const asyncWrapper = require("../middlewares/async");
const notifications = require("../fake-db/notifications");

const notification = asyncWrapper(async (req, res) => {
  res.send(notifications);
});

module.exports = {
  notification,
};
