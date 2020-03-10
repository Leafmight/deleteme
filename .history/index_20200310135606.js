const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello with role: ");
});

app.listen(2345, () => console.log("Server started"));
