var router = require('express-promise-router')();
const SolicitudController = require('../controllers/solicitudController');

/* GET users listing. */
router.route('/')
      .get(SolicitudController.ReadAll)
      .post(SolicitudController.Save)

router.route('/:idMiembro')
      .get(SolicitudController.ReadbyId)
      .put(SolicitudController.Update)
      .delete(SolicitudController.Delete)
      
module.exports = router;