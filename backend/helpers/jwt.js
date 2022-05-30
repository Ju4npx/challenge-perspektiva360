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
          console.log("JWT Generation Error", err);
          reject("Can't generate web token.");
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = generateJWT;
