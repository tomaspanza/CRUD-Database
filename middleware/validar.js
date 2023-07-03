const { Watch } = require("../models/watches");

const validarId = async (req, res, next) => {
  const busqueda = await Watch.findById(req.params.id);
  if (busqueda !== null) {
    next();
  } else {
    res.status(500).json({
      msg: "El id " + req.params.id + " no existe",
    });
  }
};

module.exports = { validarId };
