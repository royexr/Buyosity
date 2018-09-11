const Publicacion = require('../models/publicacion');

module.exports= {
  ReadAll: async function (req, res, next) {
    const publicaciones = await Publicacion.find({});
    if (!publicaciones) {
      return res.status(500).send({mensaje: 'No existen publicaciones'})
    }
    res.status(200).send(publicaciones);
  },
  ReadbyId: async function (req, res, next) {
    let { idPublicacion } = req.params;
    const publicacion = await Empresa.findById(idPublicacion);
    if (!publicacion) {
      return res.status(500).send({mensaje: 'No existe la publicacion'})
    }
    res.status(200).send(publicacion);
  },
  Save: async function (req, res, next) {
    let publicacion = await new Publicacion();
    publicacion.Nombre = req.body.Nombre;
    publicacion.Descripcion = req.body.Descripcion;
    publicacion.FechaInicio = req.body.FechaInicio;
    publicacion.FechaFin = req.body.FechaFin;
    publicacion.Tipo = req.body.Tipo;
    publicacion.Estado = req.body.Estado;

    const publicacionG = await publicacion.save();
    res.status(200).send(publicacionG);
  },
  Update: async function (req, res, next) {
    let { idPublicacion } = req.params;
    let nuevosDatos = req.body;

    const publicacion = await Publicacion.findByIdAndUpdate(idPublicacion, nuevosDatos);
    if (!publicacion) {
      return res.status(500).send({mensaje: 'No existe la publicacion'})
    }
    res.status(200).send(publicacion);
  },
  Delete: async function (req, res, next) {
    let { idPublicacion } = req.params;

    const publicacion = await Publicacion.findByIdAndRemove(idPublicacion);
    if (!publicacion) {
      return res.status(500).send({mensaje: 'No existe la publicacion'})
    }
    res.status(200).send(publicacion);
  }
}