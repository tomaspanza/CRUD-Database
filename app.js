//Librerias
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const app = express();

//Controladores
const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api");
const { connect } = require("./db/db");

//Use methods
app.use(express.json());
app.use(logger("dev"));
app.use(cors());

app.use("/", indexRouter);
app.use("/api/", apiRouter);

//Conectar a la base
connect();

module.exports = app;
