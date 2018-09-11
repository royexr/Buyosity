const Empresa = require('../models/empresa');

module.exports= {
  ReadAll: async function (req, res, next) {
    const empresas = await Empresa.find({}).populate("Usuario");
    if (!empresas) {
      return res.status(500).send({mensaje: 'No existen empresas'})
    }
    res.status(200).send(empresas);
  },
  ReadbyId: async function (req, res, next) {
    let { idEmpresa } = req.params;
    const empresa = await Empresa.findById(idEmpresa);
    if (!empresa) {
      return res.status(500).send({mensaje: 'No existe la empresa'})
    }
    res.status(200).send(empresa);
  },
  Save: async function (req, res, next) {
    let empresa = await new Empresa();
    empresa.RUC = req.body.RUC;
    empresa.Nombre = req.body.Nombre;
    empresa.Descripcion = req.body.Descripcion;

    const empresaG = await empresa.save();
    res.status(200).send(empresaG);
  },
  Update: async function (req, res, next) {
    let { idEmpresa } = req.params;
    let nuevosDatos = req.body;

    const empresa = await Empresa.findByIdAndUpdate(idEmpresa, nuevosDatos);
    if (!empresa) {
      return res.status(500).send({mensaje: 'No existe la empresa'})
    }
    res.status(200).send(empresa);
  },
  Delete: async function (req, res, next) {
    let { idEmpresa } = req.params;

    const empresa = await Empresa.findByIdAndRemove(idEmpresa);
    if (!empresa) {
      return res.status(500).send({mensaje: 'No existe la empresa'})
    }
    res.status(200).send(empresa);
  }
}