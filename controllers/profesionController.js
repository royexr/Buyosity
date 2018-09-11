const Profesion = require('../models/profesion');

module.exports = {
  ReadAll: async function (req, res, next) {
    const profesiones = await Profesion.find({});
    if (!profesiones) {
      return res.status(500).send({mensaje: 'No existen miembros'})
    }
    res.status(200).send(profesiones);
  },
  ReadbyId: async function (req, res, next) {
    let { idProfesion } = req.params;
    const profesion = await Profesion.findById(idProfesion);
    if (!profesion) {
      return res.status(500).send({mensaje: 'No existe la profesion'})
    }
    res.status(200).send(profesion);
  },
  Save: async function (req, res, next) {
    let profesion = await new Profesion();
    profesion.Nombre = req.body.Nombre;
    profesion.Descripcion = req.body.Descripcion;

    const profesionG = await profesion.save();
    res.status(200).send(profesionG);
  },
  Update: async function (req, res, next) {
    let { idProfesion } = req.params;
    let nuevosDatos = req.body;

    const profesion = Profesion.findByIdAndUpdate(idProfesion, nuevosDatos);
    if (!profesion) {
      return res.status(500).send({mensaje: 'No existe la profesion'})
    }
    res.status(200).send(profesion);
  },
  Delete: async function (req, res, next) {
    let { idProfesion } = req.params;

    const profesion = await Miembro.findByIdAndRemove(idProfesion);
    if (!profesion) {
      return res.status(500).send({mensaje: 'No existe la profesion'})
    }
    res.status(200).send(profesion);
  },
}