const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    minlength: 6,
    required: [true, 'Password is required'],
  },
  hobbies: Array,
  chameleons: [ { type: Schema.Types.ObjectId, ref: 'Chameleon'} ],
  // creditCard: {
  //   type: String,
  //   validate: {
  //     validator: function(v) {
  //       return isCreditCard(v);
  //     }
  //   },
  // },
}, {
  timestamps: true,
});

const User = model('User', UserSchema);

module.exports = User;

