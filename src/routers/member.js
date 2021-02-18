const express = require("express");

const auth = require("../middlewares/auth");
const { members } = require("../controllers/member.controller");

const router = express.Router();

router.get("/", auth, members);

module.exports = router;
