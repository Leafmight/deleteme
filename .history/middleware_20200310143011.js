function logger(req, res, next) {
  console.log(req.host);
  next();
}

export default logger;
