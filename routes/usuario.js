var router = require('express-promise-router')();
const UsuarioController = require('../controllers/usuarioController');

/* GET users listing. */
router.route('/')
      .get(UsuarioController.ReadAll)
      .post(UsuarioController.Save);

router.route('/:idUsuario')
      .get(UsuarioController.ReadbyId)
      .put(UsuarioController.Update)
      .delete(UsuarioController.Delete);

router.route('/Login').post(UsuarioController.Login);
      
module.exports = router;