const express = require('express');
const createError = require('http-errors');
const User = require('../models/User');
// const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const router = express.Router();

router.post('/', async (req, res, next) => {
  const user = await User.find({
    login: req.body.login,
  });


  if (!user) return next(createError(401, 'Invalid login or password'));

  const validPassword = await bcrypt.compare(req.body.password, user[0].password);

  if (!validPassword) return next(createError(401, 'Invalid login or password'));

  res.send('login');
})

module.exports = router;
