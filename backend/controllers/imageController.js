const AWS = require("aws-sdk");
const s3 = new AWS.S3(require("../config/s3"));
const fs = require("fs");
const User = require("../models/User");

const folder = "images";

const getImage = async (req, res) => {
  const { id } = req;
  try {
    const user = await User.findById(id);
    if (!user.image) {
      return res.status(404).json({
        ok: false,
        msg: "Imagen no encontrada",
      });
    }

    // Get params
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `${folder}/${user.image}`,
    };

    // Get file from s3
    s3.getObject(params, (err, data) => {
      if (err) throw err;
      return res.json({
        ok: true,
        image: data,
      });
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      ok: false,
      msg: "Por favor, contacte con un administrador",
    });
  }
};

const updateImage = async (req, res) => {
};

module.exports = {
  getImage,
  updateImage,
};
