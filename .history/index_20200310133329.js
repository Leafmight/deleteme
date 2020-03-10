const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  let status = {};
  status.host = req.host;
  status.headers = req.headers;
  status.time = new Date();
  console.log(status);
  req.role = "admin";
  next();
});
app.get("/", (req, res) => {
  res.send("Hello with role: " + req.role);
});

app.listen(2345, () => console.log("Server started"));
