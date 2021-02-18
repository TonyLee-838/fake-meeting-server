const express = require("express");

const { signIn } = require("../controllers/auth.controller");

const router = express.Router();

router.post("/", signIn);

module.exports = router;
