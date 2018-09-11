var router = require('express-promise-router')();
const MembresiaController = require('../controllers/membresiaController');

/* GET home page. */
router.route('/')
      .get(MembresiaController.ReadAll)
      .post(MembresiaController.Save)

router.route('/:idMiembro')
      .get(MembresiaController.ReadbyId)
      .put(MembresiaController.Update)
      .delete(MembresiaController.Delete)

module.exports = router;
