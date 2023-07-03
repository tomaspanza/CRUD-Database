const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
  },
  tipo: {
    type: String,
    required: true,
  },
  marca: {
    type: String,
    required: true,
  },
  genero: {
    type: String,
    required: true,
  },
  diseño: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
});

const Watch = mongoose.model("Watch", schema);

module.exports = { Watch };
