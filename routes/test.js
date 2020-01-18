const express = require('express');
const fs = require('fs');
const path = require('path');
const gm = require('gm').subClass({imageMagick: true});

const router = express.Router();

router.get('/', (req, res, next) => {
  gm(path.join(__dirname, '../uploads', 'ffb-1578909390187.png'))
  .blur(7, 3)
  .write(path.join(__dirname, '../uploads', 'ffb-1579334859515.png'), (err) => {
    if (!err) console.log('записано');
  })
});

module.exports = router;
