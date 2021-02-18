const express = require("express");

const auth = require("../middlewares/auth");
const { notification } = require("../controllers/notification.controller");

const router = express.Router();

router.get("/", auth, notification);

module.exports = router;
