const router = require('express').Router();
const fweetRoutes = require('./fweetRoutes');
const userRoutes = require('./userRoutes');

// /api/users
// api prepended to every Route
// the index.js for apiRoutes
// is what bridges /api with /whateverData you're trying to add to the route

// This line of code makes it so that /api/fweets is prepended to fweetRoutes
router.use('/fweets', fweetRoutes);
// This line of code makes it so that /api/users is prepended to userRoutes
router.use('/users', userRoutes);

module.exports = router;
