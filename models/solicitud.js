const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SolicitudSchema = Schema({
  Nombres: String,
  Apellidos: String,
  Telefono: Number,
  Correo: String,
  TipoRequerimiento: String,
  Descripcion: String,
  Fecha: Date,
  Estado: String
})

module.exports = mongoose.model('Solicitud', SolicitudSchema);