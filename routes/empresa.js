var router = require('express-promise-router')();
const EmpresaController = require('../controllers/empresaController');

/* GET users listing. */
router.route('/')
      .get(EmpresaController.ReadAll)
      .post(EmpresaController.Save)

router.route('/:idEmpresa')
      .get(EmpresaController.ReadbyId)
      .put(EmpresaController.Update)
      .delete(EmpresaController.Delete)

module.exports = router;
