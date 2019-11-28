const errorHandler = (err, req, res, next) => {
  res.json()
  next()
}

module.exports = errorHandler
