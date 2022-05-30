const User = require("../models/User");

const emailExists = async (req, res, next) => {
  const { email } = req.body;
  const userEmailExists = await User.findOne({ email });

  if (userEmailExists) {
    return res.status(400).json({
      ok: false,
      msg: `El correo ${email} ya existe`,
    });
  }

  next();
};

module.exports = {
  emailExists,
};
