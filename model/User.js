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


// Static belongs to the full ORM

UserSchema.static({
  findByUsername: function(username) {
    console.log('I AM THE THIS IN findByUsername', this);
    try {
      return this.find({ username });
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  },
  findOneByUsername: function(username) {
    console.log('I AM THE THIS IN findByUsername', this);
    try {
      return this.findOne({ username });
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  },
  findByHobbies: function(hobbies) {
    console.log('I AM THE THIS IN findByHobbies');
    try {
      return this.find({
        $in: {
          hobbies
        }
      });
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  }
});

// Methods belongs to an INSTANCE of the collection
UserSchema.method({
  sayMyUsername: function() {
    console.log('i am the this', this);
    console.log(`I AM ${this.username}`);
  },
})



const User = model('User', UserSchema);

module.exports = User;

