const asyncWrapper = require("../middlewares/async");
const dataOfSomebody = require("../fake-db/user");

const user = asyncWrapper(async (req, res) => {
  res.send(dataOfSomebody);
});

module.exports = {
  user
};
