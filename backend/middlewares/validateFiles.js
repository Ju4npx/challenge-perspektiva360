const validateImage = (req, res, next) => {
  if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
    return res.status(400).json({
      ok: false,
      msg: "Ningun archivo fue cargado",
    });
  }

  if (
    req.files.file.mimetype != "image/jpeg" &&
    req.files.file.mimetype != "image/png"
  ) {
    return res.status(400).json({
      ok: false,
      msg: "El archivo debe ser una imagen: JPG, JPEG, PNG",
    });
  }

  if (req.files.file.size > 1000000) {
    return res.status(400).json({
      ok: false,
      msg: "El peso del archivo debe ser menor a 1MB",
    });
  }

  const extension = req.files.file.name.split(".");
  req.files.file.extension = extension[extension.length - 1];

  next();
};

module.exports = {
  validateImage,
};
