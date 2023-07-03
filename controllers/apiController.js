const { Watch } = require("../models/watches");

class ApiController {
  inicio(req, res) {
    res.send("Bienvenido a la casa del reloj");
  }
  async buscarPorID(req, res) {
    const relojes = await Watch.findById(req.params.id);
    res.status(200).json(relojes);
  }
  async buscarPorNombre(req, res) {
    const relojes = await Watch.findOne({ nombre: req.params.nombre });
    res.status(200).json(relojes);
  }
  async verListado(req, res) {
    const relojes = await Watch.find();
    res.status(200).json(relojes);
  }

  async listadoPorMarca(req, res) {
    const relojes = await Watch.find({ marca: req.params.marca });
    res.status(200).json(relojes);
  }
  async crear(req, res) {
    try {
      const relojesguardados = new Watch(req.body);
      await relojesguardados.save();
      res.status(201).json(relojesguardados);
    } catch (error) {
      res.status(400).json(error);
    }
  }
  async editar(req, res) {
    try {
      await Watch.findByIdAndUpdate(req.params.id, req.body);
      res.status(201).json({
        msg:
          "La edición del reloj  " + req.params.id + " se guardo correctamente",
      });
    } catch (error) {
      res.status(400).json(error);
    }
  }
  async borrar(req, res) {
    try {
      await Watch.findByIdAndDelete(req.params.id);
      res.status(201).json({
        msg: "El reloj " + req.params.id + " se elimino correctamente",
      });
    } catch (error) {
      res.status(400).json(error);
    }
  }
}

module.exports = new ApiController();
