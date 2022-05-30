const jwt = require("jsonwebtoken");

const validateJWT = (req, res, next) => {
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: "No token provided, please login",
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
      msg: "Invalid token, please login again",
    });
  }

  next();
};

module.exports = validateJWT;
