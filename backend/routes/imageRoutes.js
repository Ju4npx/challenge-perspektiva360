/*
  Images routes
  api/images
*/

const { Router } = require("express");
const { getImage, updateImage } = require("../controllers/imageController");
const { validateImage } = require("../middlewares/validateFiles");
const validateJWT = require("../middlewares/validateJWT");

const router = Router();

router.use(validateJWT);

router.get("/", [], getImage);

router.put("/", [validateImage], updateImage);

module.exports = router;
