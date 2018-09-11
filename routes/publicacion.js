var router = require('express-promise-router')();
const PublicacionController = require('../controllers/publicacionController');

/* GET users listing. */
router.route('/')
      .get(PublicacionController.ReadAll)
      .post(PublicacionController.Save)

router.route('/:idMiembro')
      .get(PublicacionController.ReadbyId)
      .put(PublicacionController.Update)
      .delete(PublicacionController.Delete)
      
module.exports = router;