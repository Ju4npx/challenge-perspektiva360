const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN);
    console.log("Conexion con MongoDB establecida correctamente!");
  } catch (error) {
    throw new Error("No se pudo conectar a MongoDB");
  }
};

module.exports = dbConnection;
