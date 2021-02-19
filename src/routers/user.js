const express = require("express");

const auth = require("../middlewares/auth");
const { user } = require("../controllers/user.controller");

const router = express.Router();

router.get("/", auth, user);

module.exports = router;
