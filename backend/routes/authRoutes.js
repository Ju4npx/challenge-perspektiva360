/*
  Auth routes
  api/auth
*/

const { Router } = require("express");
const { check } = require("express-validator");
const { register, login, renewToken } = require("../controllers/authController");
const { emailExists } = require("../helpers/databaseValidators");
const validateJWT = require("../middlewares/validateJWT");
const validateFields = require("../middlewares/validateFields");
const User = require("../models/User");

const router = Router();

router.post(
  "/register",
  [
    check(
      "firstName",
      "First name length must be between 2-32 characters"
    ).isLength({
      min: 2,
      max: 32,
    }),
    check(
      "lastName",
      "Last name length must be between 2-32 characters"
    ).isLength({
      min: 2,
      max: 32,
    }),
    check("telephone", "Telephone must be a number").isNumeric(),
    check("telephone", "Telephone must be between 7-10 characters").isLength({
      min: 7,
      max: 10,
    }),
    check("email", "Invalid email.").isEmail(),
    check(
      "password",
      "Password should be between 8-32 characters and should include 1 number, 1 symbol, 1 lowercase and 1 uppercase."
    ).isStrongPassword(),
    check("password", "Password should be between 8-32 characters.").isLength({
      max: 32,
    }),
    check("gender", "Gender must be male (M) or female (F)").isIn(
      // Get valid enum values
      User.schema.path("gender").enumValues
    ),
    check("city", "City length must be between 2 and 32 characters").isLength({
      min: 2,
      max: 32,
    }),
    validateFields,
    emailExists,
  ],
  register
);

router.post(
  "/login",
  [
    check("email", "Email is required").not().isEmpty(),
    check("email", "Invalid email").isEmail(),
    check("password", "Password is required.").not().isEmpty(),
    validateFields,
  ],
  login
);

router.get("/renew", validateJWT, renewToken);

module.exports = router;
