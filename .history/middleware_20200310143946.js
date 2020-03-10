function logger(req, res, next) {
  console.log("Called something");
  next();
}

module.exports.logger = logger;
