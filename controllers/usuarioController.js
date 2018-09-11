const crypto = require('crypto-js');

const Usuario = require('../models/usuario');
const Miembro = require('../models/miembro');
const Empresa = require('../models/empresa');

module.exports= {
  ReadAll: async function (req, res, next) {
    const usuarios = await Usuario.find({}).populate("Sesiones");;
    if (!usuarios) {
      return res.status(500).send({mensaje: 'No existen usuarios'})
    }
    res.status(200).send(usuarios);
  },
  ReadbyId: async function (req, res, next) {
    let { idUsuario } = req.params;
    const usuario = await Usuario.findById(idUsuario).populate("Sesiones");
    if (!usuario) {
      return res.status(500).send({mensaje: 'No existe el usuario'})
    }
    res.status(200).send(usuario);
  },
  Login: async function (req, res, next) {
    console.log(req.body);
    const usuario = await Usuario.findOne({Usuario: req.body.usuario});
    if (!usuario) {
      return res.status(500).send({mensaje: 'No existe el usuario'});
    } else {
      var bytes = crypto.AES.decrypt(usuario.ContraseñaH, usuario.ContraseñaS);
      var pt = bytes.toString(crypto.enc.Utf8);
      if (pt == req.body.contraseña) {
        return res.status(200).send({mensaje: 'Dar Acceso'});
      }
      else {
        return res.status(500).send({mensaje: 'Contraseña Incorrecta'});
      }
    }
  },
  Save: async function (req, res, next) {
    var Datos = await Miembro.findById(req.body.idDatos);
    var tipo = "Empresa";
    (!Datos)? Datos = await Empresa.findById(req.body.idDatos)  : tipo = "Miembro";

    let usuario = await new Usuario();
    usuario.Usuario = req.body.Usuario;
    usuario.ContraseñaH = req.body.ContraseñaH;
    usuario.Datos.Tipo = tipo;
    usuario.Datos.Ente = Datos;
    
    const usuarioG = await usuario.save();
    Datos.Usuario = usuarioG;
    const DatosG = await Datos.save();
    res.status(200).send(DatosG);
  },
  Update: async function (req, res, next) {
    let { idUsuario } = req.params;
    let nuevosDatos = req.body;

    const usuario = await Usuario.findByIdAndUpdate(idUsuario, nuevosDatos);
    if (!usuario) {
      return res.status(500).send({mensaje: 'No existe el usuario'})
    }
    res.status(200).send(usuario);
  },
  Delete: async function (req, res, next) {
    let { idUsuario } = req.params;
    
    const usuario = await Usuario.findByIdAndRemove(idUsuario);
    if (!usuario) {
      return res.status(500).send({mensaje: 'No existe el usuario'})
    }
    res.status(200).send(usuario);
  }
}