const Solicitud = require('../models/solicitud');

module.exports= {
  ReadAll: async function (req, res, next) {
    const solicitudes = await Solicitud.find({}).populate("Usuario");
    if (!solicitudes) {
      return res.status(500).send({mensaje: 'No existen solicitudes'})
    }
    res.status(200).send(solicitudes);
  },
  ReadbyId: async function (req, res, next) {
    let { idSolicitud } = req.params;
    const solicitud = await Empresa.findById(idSolicitud);
    if (!solicitud) {
      return res.status(500).send({mensaje: 'No existe la solicitud'})
    }
    res.status(200).send(solicitud);
  },
  Save: async function (req, res, next) {
    let solicitud = await new Solicitud();
    solicitud.Nombres = req.body.Nombres;
    solicitud.Apellidos = req.body.Apellidos;
    solicitud.Telefono = req.body.Telefono;
    solicitud.Correo = req.body.Correo;
    solicitud.TipoRequerimiento = req.body.TipoRequerimiento;
    solicitud.Descripcion = req.body.Descripcion;
    solicitud.Fecha = req.body.Fecha;
    solicitud.Estado = req.body.Estado;

    const solicitudG = await solicitud.save();
    res.status(200).send(solicitudG);
  },
  Update: async function (req, res, next) {
    let { idSolicitud } = req.params;
    let nuevosDatos = req.body;

    const solicitud = await Solicitud.findByIdAndUpdate(idSolicitud, nuevosDatos);
    if (!solicitud) {
      return res.status(500).send({mensaje: 'No existe la solicitud'})
    }
    res.status(200).send(solicitud);
  },
  Delete: async function (req, res, next) {
    let { idSolicitud } = req.params;

    const solicitud = await Solicitud.findByIdAndRemove(idSolicitud);
    if (!solicitud) {
      return res.status(500).send({mensaje: 'No existe la solicitud'})
    }
    res.status(200).send(solicitud);
  }
}