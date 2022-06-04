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

    // Get image from s3
    const image = await s3
      .getObject({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${folder}/${user.image}`,
      })
      .promise();

    return res.json({
      ok: true,
      image,
    });
  } catch (err) {
    if (err.code == "NoSuchKey") {
      return res.status(404).json({
        ok: false,
        msg: "Imagen no encontrada",
      });
    }
    console.log(err);
    return res.status(500).json({
      ok: false,
      msg: "Por favor, contacte con un administrador",
    });
  }
};

const updateImage = async (req, res) => {
  const { file } = req.files;
  const { id } = req;
  try {
    const user = await User.findById(id);
    const fileName = `${id}.${file.extension}`;

    // Read file
    const data = fs.readFileSync(file.tempFilePath);

    // Delete old image if exists
    if (user.image && user.image !== fileName) {
      await s3
        .deleteObject({
          Bucket: process.env.AWS_BUCKET_NAME,
          Key: `${folder}/${user.image}`,
        })
        .promise();
    }

    user.image = fileName;

    // Upload image to s3 and save image name
    const image = await s3
      .putObject({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${folder}/${fileName}`,
        Body: data,
      })
      .promise();

    await user.save();

    return res.status(201).json({
      ok: true,
      image,
    });
  } catch (err) {
    if (err.code == "NoSuchKey") {
      return res.status(404).json({
        ok: false,
        msg: "Imagen no encontrada",
      });
    }
    console.log(err);
    return res.status(500).json({
      ok: false,
      msg: "Please, contact the administrator",
    });
  }
};

module.exports = {
  getImage,
  updateImage,
};
