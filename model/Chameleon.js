// Step 1 Create a new file called Chameleon.js
// Step 2 Create a schema for your chameleon
// Make sure it has a name, trim it, make it required,
// Make sure it has an age that is a number and it is required
// Make a favoriteFoods field that is a String, and make it an enum of your chameleon's favorite food
// Make sure it has a field called isHungry and mnake it a boolean, and it is not required completely optional
// make sure it has timeStamps
// Create a model out of it
// Export that model
const { Schema, model,  } = require('mongoose');

// Foreign Key

const ChameleonSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Chameleon name is required']
  },
  age: {
    type: Number,
    required: true,
  },
  favoriteFood: {
    type: String,
    enum: ['crickets', 'grasshoppers', 'mantids', 'spiders']
  },
  isHungry: Boolean,
  owner: { type: Schema.Types.ObjectId, ref: 'User'},
}, { timestamps: true });

const Chameleon = model('Chameleon', ChameleonSchema);


module.exports = Chameleon;
