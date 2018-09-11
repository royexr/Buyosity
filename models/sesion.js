const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SesionSchema = Schema({
  FInicio: Date,
  FFin: Date,
  Usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' }
})

module.exports = mongoose.model('Sesion', SesionSchema);