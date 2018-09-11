var router = require('express-promise-router')();
const SesionController = require('../controllers/sesionController');

/* GET users listing. */
router.route('/')
      .get(SesionController.ReadAll)
      .post(SesionController.Save)

router.route('/:idSesion')
      .get(SesionController.ReadbyId)
      .put(SesionController.Update)
      .delete(SesionController.Delete)
      
module.exports = router;