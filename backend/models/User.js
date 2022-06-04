const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  firstName: {
    type: String,
    required: [true, "El nombre es requerido"],
  },
  lastName: {
    type: String,
    required: [true, "El apellido es requerido"],
  },
  telephone: {
    type: Number,
    required: [true, "El telefono es requerido"],
  },
  email: {
    type: String,
    required: [true, "El email es requerido"],
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "La contraseña es requerida"],
  },
  gender: {
    type: String,
    enum: ["M", "F"],
    required: [true, "El genero es requerido"],
  },
  city: {
    type: String,
    required: [true, "La ciudad es requerida"],
  },
  image: {
    type: String,
  },
});

UserSchema.methods.toJSON = function () {
  const { __v, _id, password, ...user } = this.toObject();
  user.id = _id;
  return user;
};

module.exports = model("User", UserSchema);
