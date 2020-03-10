function logger(err, req, res, next) {
  console.log("Called something");
  next(err);
}

module.exports.logger = logger;
