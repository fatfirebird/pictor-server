const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const user = await User.find({
      login: req.query.login,
      password: req.query.password,
    });

    if (!Object.keys(user).length) {
      res.status(401);
      res.message('Ошибка авторизации, проверьте правильность внесенных данных');
      res.json('ввв')
    }

    res.json(user)
  } catch (e) {
    res.json(e)
  }
})

router.post('/', async (req, res, next) => {
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
