const router = require('express').Router();
const chamController = require('../../../controllers/chamController');

const authMiddleware = require('../../../middlewares/authorizationMiddleware');
// Every route we declare inside of here already has
// /api/cham prepended
router.use(authMiddleware);

router.route('/')
  .post(chamController.createChameleon);

module.exports = router;

// In the controller for chams
// Create a method for the following requests
// Get all of the chameleons from the database
// Get a chameleon by ID using the url for the id
// Delete a chameleon by ID using the URL for the id
// Updating a chameleon by its ID using the url for the id'

// Wire up the controllers in chamRoutes
