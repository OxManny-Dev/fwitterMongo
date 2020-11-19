const router = require('express').Router();

const {
  findAllFweetsApi,
  deleteFweetByIdApi,
  insertFweetApi,
  findFweetByIdApi,
  findFweetsByLoggedInUserApi,
} = require('../../../controllers/fweetController');

const authMiddleware = require('../../../middlewares/authorizationMiddleware');

router.use(authMiddleware);

// /api/fweets/userFweets
router.route('/userfweets')
  .get(findFweetsByLoggedInUserApi)

// /api/fweets
router.route('/')
  .get(findAllFweetsApi)
  .post(insertFweetApi);


//  /api/fweets/:fweetId
router.route('/:fweetId')
  .get(findFweetByIdApi)
  .delete(deleteFweetByIdApi);

module.exports = router;
