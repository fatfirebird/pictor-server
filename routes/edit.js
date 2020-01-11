const express = require('express');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const decodeJWT = require('../middlewares/decodeJWT');

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
  file: (req, res, file) => {
    console.log(file);
    return {
      filename: `${res.locals.login}-${Date().toISOString()}`
    }
  }
});

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, new Date().toISOString() + file.originalname);
//   }
// });

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 20,
  }
});

router.post('/', decodeJWT, upload.single('image'), (req, res, next) => {
  console.log(res.locals.login);
  console.log(req.file);
  res.send(req.file);
});

module.exports = router;
