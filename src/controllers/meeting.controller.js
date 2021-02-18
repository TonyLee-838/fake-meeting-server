const asyncWrapper = require("../middlewares/async");
const meetings = require("../fake-db/meetings");

const meeting = asyncWrapper(async (req, res) => {
  res.send(meetings);
});

module.exports = {
  meeting,
};
