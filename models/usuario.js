const mongoose = require('mongoose');
const crypto = require('crypto-js');
const Schema = mongoose.Schema;

const UsuarioSchema = Schema({
  Usuario: { type: String, unique: false },
  ContraseñaH: { type: String, select: true },
  ContraseñaS: { type: String, select: true },
  Datos: {
    Tipo: String,
    Ente: { type: Schema.Types.ObjectId, ref: 'Datos.Tipo' }
  },
  Sesiones: [{ type: Schema.Types.ObjectId, ref: 'Sesion' }]
})

UsuarioSchema.pre('save', function () {
  let salt = this.Datos.Tipo[0] + this.Usuario[1];
  var hash = crypto.AES.encrypt(this.ContraseñaH, salt);

  this.ContraseñaH = hash;
  this.ContraseñaS = salt;
})

module.exports = mongoose.model('Usuario', UsuarioSchema);