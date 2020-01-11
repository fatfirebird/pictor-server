const express = require('express');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const jwt = require('jsonwebtoken');
require('dotenv/config');

const router = express.Router();

const fileFilter = (req, file, cb) => {
  if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg"
     )
     return cb(null, true);

  return cb(null, false)
};

const storage = new GridFsStorage({
  url: process.env.MONGODB_CONNECTION,
  file: (req, file) => {
    const decoded = jwt.verify(req.headers.authorization, process.env.SECRET);
    const login = decoded.login;
    return {
      filename: `${login}-${Date.now()}`
    }
  }
});

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 20,
  }
});

router.post('/', upload.single('image'), (req, res, next) => {
  res.send(req.file);
});

module.exports = router;
