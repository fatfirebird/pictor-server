const express = require('express');
const createError = require('http-errors');
const User = require('../models/User');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const router = express.Router();


router.get('/', async (req, res, next) => {
  try {
    const user = await User.find({
      login: req.query.login,
      password: req.query.password,
    });

    if (!Object.keys(user).length) {
      return next(createError(401, 'User not found'))
    }
    res.json(user)
  } catch (e) {
    return next(e)
  }
});

router.post('/', async (req, res, next) => {
    const email = await User.find({
      email: req.body.email,
    });

    if (!!email[0] && email[0].email === req.body.email) {
      return next(createError(500, 'This email is alredy exists'))
    }

    const login = await User.find({
      login: req.body.login,
    });

    if (!!login[0] && login[0].login === req.body.login) {
      return next(createError(500, 'This login is alredy exists'))
    }

  try {
    const code = crypto.randomBytes(64).toString('hex');
    const token = jwt.sign({login: req.body.login, password: req.body.password}, code);
    console.log(token);

    const user = new User({
      email: req.body.email,
      login: req.body.login,
      token: token,
    });

    const savedUser = await user.save();
    res.json({ token: token} );
  } catch (e) {
    return next(e)
  }
});

module.exports = router;
