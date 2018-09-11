const Miembro = require('../models/miembro');

module.exports = {
  ReadAll: async function (req, res, next) {
    const miembros = await Miembro.find({}).populate("Usuario");
    if (!miembros) {
      return res.status(500).send({mensaje: 'No existen miembros'})
    }
    res.status(200).send(miembros);
  },
  ReadbyId: async function (req, res, next) {
    let { idMiembro } = req.params;
    const miembro = await Miembro.findById(idMiembro);
    if (!miembro) {
      return res.status(500).send({mensaje: 'No existe el miembro'})
    }
    res.status(200).send(miembro);
  },
  Save: async function (req, res, next) {
    let miembro = await new Miembro();
    miembro.DNI = req.body.DNI;
    miembro.Nombres = req.body.Nombres;
    miembro.APaterno = req.body.APaterno;
    miembro.AMaterno = req.body.AMaterno;
    miembro.Celular = req.body.Celular;
    miembro.Telefono = req.body.Telefono;
    miembro.Direccion = req.body.Direccion;
    miembro.Correo = req.body.Correo;

    const miembroG = await miembro.save();
    res.status(200).send(miembroG);
  },
  Update: async function (req, res, next) {
    let { idMiembro } = req.params;
    let nuevosDatos = req.body;

    const miembro = Miembro.findByIdAndUpdate(idMiembro, nuevosDatos);
    if (!miembro) {
      return res.status(500).send({mensaje: 'No existe el miembro'})
    }
    res.status(200).send(miembro);
  },
  Delete: async function (req, res, next) {
    let { idMiembro } = req.params;

    const miembro = await Miembro.findByIdAndRemove(idMiembro);
    if (!miembro) {
      return res.status(500).send({mensaje: 'No existe el miembro'})
    }
    res.status(200).send(miembro);
  }
};