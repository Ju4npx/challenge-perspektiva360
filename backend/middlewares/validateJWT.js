const jwt = require("jsonwebtoken");

const validateJWT = (req, res, next) => {
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: "No se ha proporcionado ningun token, por favor, inicie sesion",
    });
  }

  try {
    const { id, firstName, lastName } = jwt.verify(
      token,
      process.env.JWT_SECRET_KEY
    );

    req.id = id;
    req.firstName = firstName;
    req.lastName = lastName;
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: "Token invalido, por favor, inicie sesion nuevamente",
    });
  }

  next();
};

module.exports = validateJWT;
