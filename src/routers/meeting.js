const express = require("express");

const auth = require("../middlewares/auth");
const { meeting } = require("../controllers/meeting.controller");

const router = express.Router();

router.get("/", auth, meeting);

module.exports = router;
