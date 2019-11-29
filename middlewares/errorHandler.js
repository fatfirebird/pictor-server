const createError = require('http-errors');

const errorHandler = (err, req, res, next) => {
  const status = err.status;
  const message = err.message;

  res.statusMessage = message;
  res.status(status || 500).json({status: status, message: message});
}

module.exports = errorHandler
