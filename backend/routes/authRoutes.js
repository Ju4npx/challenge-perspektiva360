/*
  Auth routes
  api/auth
*/

const { Router } = require("express");
const { check } = require("express-validator");
const {
  register,
  login,
  renewToken,
} = require("../controllers/authController");
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
      "El nombre debe tener entre 2 y 32 caracteres"
    ).isLength({
      min: 2,
      max: 32,
    }),
    check(
      "lastName",
      "El apellido debe tener entre 2 y 32 caracteres"
    ).isLength({
      min: 2,
      max: 32,
    }),
    check("telephone", "El telefono debe ser numerico").isNumeric(),
    check("telephone", "El telefono debe tener entre 7 y 10 caracteres").isLength({
      min: 7,
      max: 10,
    }),
    check("email", "El email no es valido.").isEmail(),
    check(
      "password",
      "La contraseña debe tener entre 8 y 32 caracteres, debe incluir 1 numero, 1 simbolo, 1 mayuscula y 1 minuscula"
    ).isStrongPassword(),
    check("password", "La contraseña debe tener entre 8 y 32 caracteres").isLength({
      max: 32,
    }),
    check("gender", "El genero debe ser masculino (M) o femenino (F)").isIn(
      // Get valid enum values
      User.schema.path("gender").enumValues
    ),
    check("city", "La ciudad debe tener entre 2 y 32 caracteres").isLength({
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
    check("email", "El email no es valido").isEmail(),
    check("password", "La contraseña es requerida.").not().isEmpty(),
    validateFields,
  ],
  login
);

router.get("/renew", validateJWT, renewToken);

module.exports = router;
