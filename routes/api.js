//Librerias
const express = require("express");
const router = express.Router();
//Controllers
const apiController = require("../controllers/apiController");

//Middleware
const { validarId } = require("../middleware/validar");
const checks = require("../middleware/checks");
const { validarChecks } = require("../middleware/validarChecks");

//Get
router.get("/inicio", apiController.inicio);
router.get("/listado", apiController.verListado);
router.get("/listado/marca/:marca", apiController.listadoPorMarca);
router.get("/listado/buscar/id/:id", validarId, apiController.buscarPorID);
router.get("/listado/buscar/nombre/:nombre", apiController.buscarPorNombre);

//Post
router.post("/crear", checks, validarChecks, apiController.crear);

//Put
router.put(
  "/editar/:id",
  validarId,
  checks,
  validarChecks,
  apiController.editar
);

//Delete
router.delete(
  "/borrar/:id",
  validarId,
  checks,
  validarChecks,
  apiController.borrar
);

module.exports = router;
