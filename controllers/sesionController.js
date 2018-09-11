const Sesion = require('../models/sesion');
const Usuario = require('../models/usuario');

module.exports= {
  ReadAll: async function (req, res, next) {
    const sesiones = await Sesion.find({}).populate("Usuario");
    if (!sesiones) {
      return res.status(500).send({mensaje: 'No existen sesiones'})
    }
    res.status(200).send(sesiones);
  },
  ReadbyId: async function (req, res, next) {
    let { idSesion } = req.params;
    const sesion = await Sesion.findById(idSesion).populate("Usuario");
    if (!sesion) {
      return res.status(500).send({mensaje: 'No existe la sesion'})
    }
    res.status(200).send(sesion);
  },
  Save: async function (req, res, next) {
    const { idUsuario } = req.body;
    var usuario = await Usuario.findById(idUsuario);
    var sesion = await new Sesion();
    sesion.FInicio = req.body.FInicio;
    sesion.FFin = req.body.FFin;
    sesion.Usuario = usuario;

    const sesionG = await sesion.save();
    usuario.Sesiones.push(sesion);
    const usuarioG =await usuario.save();

    res.status(200).send(usuarioG);
  },
  Update: async function (req, res, next) {
    let { idSesion } = req.params;
    let nuevosDatos = req.body;

    const sesion = await Sesion.findByIdAndUpdate(idSesion, nuevosDatos);
    if (!sesion) {
      return res.status(500).send({mensaje: 'No existe la sesion'})
    }
    res.status(200).send(sesion);
  },
  Delete: async function (req, res, next) {
    let { idSesion } = req.params;

    const sesion = await Sesion.findByIdAndRemove(idSesion);
    if (!sesion) {
      return res.status(500).send({mensaje: 'No existe la sesion'})
    }
    res.status(200).send(sesion);
  }
}