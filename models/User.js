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
  },
  token: {
    type: String,
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
