const jwt = require("jsonwebtoken");

const generateJWT = (id, firstName, lastName) => {
  return new Promise((resolve, reject) => {
    const payload = { id, firstName, lastName };
    jwt.sign(
      payload,
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "48h",
      },
      (err, token) => {
        if (err) {
          console.log("Error al generar JWT", err);
          reject("No se pudo generar un token.");
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = generateJWT;
