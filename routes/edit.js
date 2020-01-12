const express = require('express');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');
const User = require('../models/User');
require('dotenv/config');

const router = express.Router();
let date;

// (function setDate() {
//   date = Date.now()
// }())

const fileFilter = (req, file, cb) => {
  if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg"
     )
     return cb(null, true);

  return cb(null, false)
};

// const storage = new GridFsStorage({
//   url: process.env.MONGODB_CONNECTION,
//   file: (req, file) => {
//     const decoded = jwt.verify(req.headers.authorization, process.env.SECRET);
//     const login = decoded.login;
//     return {
//       filename: `${login}-${Date.now()}`
//     }
//   }
// });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    date = Date.now();
    fileName = createFileName(req, file);
    cb(null, fileName);
  }
});

const createFileName = (req, file) => {
  console.log(date);
  const decoded = jwt.verify(req.headers.authorization, process.env.SECRET);
  const login = decoded.login;
  const fileName = file.originalname;
  const extension = fileName.slice(fileName.lastIndexOf('.'));
  return `${login}-${date}${extension}`;
}

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 16,
  }
});

router.post('/', upload.single('image'), (req, res, next) => {

  const fileName = createFileName(req, req.file);
  fs.readFile(path.join(__dirname, '../uploads', fileName), 'base64', async (err, base64img) => {
    const dataUrl = `data:image/jpeg;base64, ${base64img}`
    const login = (fileName.slice(0, fileName.indexOf('-')));
    const image = { image: dataUrl, date };
    const img = await User.updateOne({ login }, { $push: { images: image} });
    res.send(dataUrl)
  });
});

module.exports = router;
