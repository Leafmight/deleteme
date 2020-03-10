const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  console.log("A request");
});
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(2345, () => console.log("Server started"));
