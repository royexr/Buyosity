const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PublicacionSchema = Schema({
  Nombre: String,
  Descripcion: String,
  FechaInicio: { type: Date },
  FechaFin: { type: Date },
  Tipo: String,
  Estado: String,
  Tags: [{type: Schema.Types.ObjectId, ref: 'Tag'}],
  Creador: {type: Schema.Types.ObjectId, ref: 'Usuario'}
})

module.exports = mongoose.model('Publicacion', PublicacionSchema);