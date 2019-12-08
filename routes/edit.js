const express = require('express');
const multer = require('multer');

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

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + file.originalname);
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
  console.log(req.file);
  res.send(req);
});

module.exports = router;
