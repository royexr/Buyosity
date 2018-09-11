var router = require('express-promise-router')();
const ProfesionController = require('../controllers/profesionController');

/* GET users listing. */
router.route('/')
      .get(ProfesionController.ReadAll)
      .post(ProfesionController.Save)

router.route('/:idMiembro')
      .get(ProfesionController.ReadbyId)
      .put(ProfesionController.Update)
      .delete(ProfesionController.Delete)
      
module.exports = router;