const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  login: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  images: [{
    image: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now(),
    }
  }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
