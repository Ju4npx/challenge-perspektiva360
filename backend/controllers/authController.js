const bcryptjs = require("bcryptjs");
const generateJWT = require("../helpers/jwt");
const User = require("../models/User");

const register = async (req, res) => {
  const { firstName, lastName, telephone, email, password, gender, city } =
    req.body;
  try {
    const user = new User({
      firstName,
      lastName,
      telephone,
      email,
      password,
      gender,
      city,
    });

    // Encrypt password
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);

    await user.save();

    // Generate JWT token
    const token = await generateJWT(user.id, user.name);

    return res.json({
      ok: true,
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Please, contact the administrator",
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Verify if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: "User not found",
      });
    }

    // Verify if passwords match
    const validPassword = bcryptjs.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "Invalid password",
      });
    }

    const token = await generateJWT(user.id, user.name);

    return res.json({
      ok: true,
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Please, contact the administrator",
    });
  }
};

module.exports = {
  register,
  login,
};
