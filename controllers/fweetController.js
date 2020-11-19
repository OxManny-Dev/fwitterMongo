const {
  findAllFweetsFromDb,
  findFweetByIdFromDb,
  findFweetsByUserFromDb,
  insertFweetToDb,
  deleteFweetByIdFromDb,
} = require('../model/fweetOrm');

// Mongo Db
// Data Structures And Algorithms
// linked list
// stacks and queues, binary trees
// quicksort , bubble sort,


module.exports = {
  findFweetsByLoggedInUserApi: async (req, res) => {
    try {
      const userFweets = await findFweetsByUserFromDb(req.user.id);
      return res.json(userFweets);
    } catch (e) {
      res.status(401).json(e);
    }
  },
  findFweetByIdApi: async (req, res) => {
    const { fweetId } = req.params;
    try {
      const fweet = await findFweetByIdFromDb(fweetId);
      if (!fweet) {
        return res.status(404).send('No fweet found with that id');
      }
      return res.json(fweet);
    } catch (e) {
      res.status(401).json(e);
    }
  },
  findAllFweetsApi: async (req, res) => {
    try {
      const fweets = await findAllFweetsFromDb();
      return res.json(fweets);
    } catch (e) {
      res.status(401).json(e);
    }
  },
  deleteFweetByIdApi: async (req, res) => {
    const { fweetId } = req.params;
    try {
      const fweetToDelete = await findFweetByIdFromDb(fweetId);
      if (fweetToDelete.userId !== req.user.id) {
        return res.status(401).send('You are unauthorized to delete this fweet');
      }
      const deletedFweet = await deleteFweetByIdFromDb(fweetId);
      return res.json(deletedFweet);
    } catch (e) {
      res.status(401).json(e);
    }
  },
  insertFweetApi: async (req, res) => {
  //  req.user // logged in user
  //  req.body // coming from form
  //  req.params // coming from wildcards declared in routes
    const { fweet } = req.body;
    try {
      const createdFweet = await insertFweetToDb(fweet, req.user.id);
      res.json(createdFweet);
    } catch (e) {
      res.status(401).json(e);
    }
  },
}
