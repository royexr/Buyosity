const Membresia = require('../models/membresia');

module.exports = {
  ReadAll: async function (req, res, next) {
    const membresias = await Membresia.find({});
    if (!membresias) {
      return res.status(500).send({mensaje: 'No existen membresias'})
    }
    res.status(200).send(membresias);
  },
  ReadbyId: async function (req, res, next) {
    let { idMembresia } = req.params;
    const membresia = await Membresia.findById(idMembresia);
    if (!membresia) {
      return res.status(500).send({mensaje: 'No existe la membresia'})
    }
    res.status(200).send(membresia);
  },
  Save: async function (req, res, next) {
    let membresia = await new Membresia();
    membresia.FInicio = req.body.FInicio;
    membresia.FFin = req.body.FFin;
    membresia.Tipo = req.body.Tipo;
    membresia.Estado = req.body.Estado;

    const membresiaG = await membresia.save();
    res.status(200).send(membresiaG);
  },
  Update: async function (req, res, next) {
    let { idMembresia } = req.params;
    let nuevosDatos = req.body;

    const membresia = Miembro.findByIdAndUpdate(idMembresia, nuevosDatos);
    if (!membresia) {
      return res.status(500).send({mensaje: 'No existe la membresia'})
    }
    res.status(200).send(membresia);
  },
  Delete: async function (req, res, next) {
    let { idMembresia } = req.params;

    const membresia = await Membresia.findByIdAndRemove(idMembresia);
    if (!membresia) {
      return res.status(500).send({mensaje: 'No existe la membresia'})
    }
    res.status(200).send(membresia)
  }
}