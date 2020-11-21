const router = require('express').Router();
const chamRoutes = require('./chamRoutes');

// Everyting in this router already has /api prepended to it
router.use('/cham', chamRoutes);

module.exports = router;
