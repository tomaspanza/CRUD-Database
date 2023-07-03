const { check } = require("express-validator");

const checks = [
  check("nombre")
    .notEmpty()
    .withMessage("El campo 'nombre' es obligatorio")
    .isString()
    .withMessage("El campo 'nombre' tiene que ser un string"),
  check("tipo")
    .notEmpty()
    .withMessage("El campo 'tipo' es obligatorio")
    .isString()
    .withMessage("El campo 'tipo' tiene que ser un string"),
  check("marca")
    .notEmpty()
    .withMessage("El campo 'marca' es obligatorio")
    .isString()
    .withMessage("El campo 'marca' tiene que ser un string"),
  check("genero")
    .notEmpty()
    .withMessage("El campo 'genero' es obligatorio")
    .isString()
    .withMessage("El campo 'genero' tiene que ser un string")
    .custom((sex) => {
      if (sex === "Hombre" || sex === "Mujer" || sex === "Unisex") {
        return true;
      } else {
        throw new Error("El genero tiene que ser Hombre, Mujer o Unisex");
      }
    }),

  check("diseño")
    .notEmpty()
    .withMessage("El campo 'diseño' es obligatorio")
    .isString()
    .withMessage("El campo 'diseño' tiene que ser un string"),
  check("precio")
    .notEmpty()
    .withMessage("El campo 'precio' es obligatorio")
    .isNumeric()
    .withMessage("El campo 'precio' tiene que ser un numero")
    .custom((precio) => {
      if (precio < 0) {
        throw new Error("El precio no puede ser menor que 0");
      } else {
        return true;
      }
    }),
];

module.exports = checks;
