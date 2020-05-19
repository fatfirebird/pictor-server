const express = require('express');
const createError = require('http-errors');
const User = require('../models/User');
const bcrypt = require('bcrypt');

const router = express.Router();

router.post('/', async (req, res, next) => {
  const email = await User.find({
    email: req.body.email,
  });

  if (!!email[0] && email[0].email === req.body.email) {
    return next(createError(401, 'This email is already exists'))
  }

  const login = await User.find({
    login: req.body.login,
  });

  if (!!login[0] && login[0].login === req.body.login) {
    return next(createError(401, 'This login is already exists'))
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(req.body.password, salt);

  try {
    const user = new User({
      email: req.body.email,
      login: req.body.login,
      password: hash,
    });

    const savedUser = await user.save();

    res.json({ email: user.email });
  } catch (e) {
    return next(e)
  }
})

module.exports = router;
