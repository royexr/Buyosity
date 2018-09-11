const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfesionSchema = Schema({
  Nombre: String,
  Descripcion: String
});

module.exports = mongoose.model('Profesion', ProfesionSchema);