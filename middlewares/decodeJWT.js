const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv/config');

const decodeJWT = (req, res, next) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, process.env.SECRET);
  const login = decoded.login;
  res.locals.login = login;
  console.log(login);
  next();
}

module.exports = decodeJWT;
