var router = require('express-promise-router')();
const MiembroController = require('../controllers/miembroController');

/* GET users listing. */
router.route('/')
      .get(MiembroController.ReadAll)
      .post(MiembroController.Save)

router.route('/:idMiembro')
      .get(MiembroController.ReadbyId)
      .put(MiembroController.Update)
      .delete(MiembroController.Delete)
      
module.exports = router;
