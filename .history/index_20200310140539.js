const express = require("express");
const app = express();

class ApiError extends Error {
  constructor(msg, errorCode) {
    super(msg);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError);
    }

    this.name = "ApiError";
    this.errorCode = errorCode || 500;
  }
}

app.get("/", (req, res) => {
  res.send("Hello with role: ");
});

app.get("/api/user", (req, res) => {
  const user = { name: "Jack Jackson" };
  res.json(user);
});

app.get("/api/user2", (req, res) => {
  throw new ApiError("User not found", 404);
  res.json(user);
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(2345, () => console.log("Server started"));
