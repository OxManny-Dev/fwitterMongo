const db = require('../model');

module.exports = {
  createChameleon: async (req, res) => {
    const { name, age, favoriteFood, isHungry } = req.body;
    try {
      const newChameleon = await db.Chameleon.create({
        name,
        age,
        favoriteFood,
        isHungry,
        owner: req.user._id,
      });

      req.user.chameleons.push(newChameleon._id);
      await req.user.save();

      res.json(newChameleon);
    } catch (e) {
      console.log('L:9 chamController', e);
      res.status(401).json(e);
    }

  },
};
