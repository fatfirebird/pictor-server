const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const user = await User.find({
      login: req.body.login,
    })
    res.json(user)
  } catch (e) {
    res.json(e)
  }
})

router.post('/', async (req, res) => {
  const user = new User({
    email: req.body.email,
    login: req.body.login,
    password: req.body.password,
  });

  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (e) {
    res.json(e)
  }
});

module.exports = router;
