/*
  Auth routes
  api/auth
*/

const { Router } = require("express");
const { check } = require("express-validator");
const { register, login } = require("../controllers/authController");
const validateFields = require("../middlewares/validateFields");

const router = Router();

router.post("/register", [], register);

router.post("/login", [], login);

module.exports = router;
