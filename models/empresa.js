const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto-js');

const EmpresaSchema = Schema({
  RUC: { type: Number, unique: true },
  Nombre: String,
  Descripcion: String,
  Usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' }
});

module.exports = mongoose.model('Empresa', EmpresaSchema);