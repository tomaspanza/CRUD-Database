const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
require("dotenv").config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CNN);
    console.log("Se conecto la base de datos");
  } catch {
    console.log("No se pudo conectar");
  }
};

module.exports = { connect };
