

function errorHandler(err, req, res, next) {
  console.log("error handler middle ware h ye wala")
  console.error(err);

  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error"
  });
}

module.exports = errorHandler;