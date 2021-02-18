const asyncWrapper = require("../middlewares/async");
const colleagueOfSomebody = require("../fake-db/members");

const members = asyncWrapper(async (req, res) => {
  res.send(colleagueOfSomebody);
});

module.exports = {
  members,
};
