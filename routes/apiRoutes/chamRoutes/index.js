const router = require('express').Router();
const chamController = require('../../../controllers/chamController');

const authMiddleware = require('../../../middlewares/authorizationMiddleware');
// Every route we declare inside of here already has
// /api/cham prepended
router.route('/')
  .post(authMiddleware, chamController.createChameleon);

module.exports = router;
