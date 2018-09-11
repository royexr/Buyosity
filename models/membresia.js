const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MembresiaSchema = Schema({
  FInicio: Date,
  FFin: Date,
  Tipo: String,
  Estado: Boolean
});

module.exports = mongoose.model('Membresia', MembresiaSchema);