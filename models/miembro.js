const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto-js');

const MiembroSchema = Schema({
  DNI: { type: Number, unique: true },
  Nombres: String,
  APaterno: String,
  AMaterno: String,
  Celular: Number,
  Telefono: Number,
  Direccion: String,
  Correo: { type: String, lowercase: true },
  Usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' }
});

module.exports = mongoose.model('Miembro', MiembroSchema);