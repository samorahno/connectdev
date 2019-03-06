const express = require("express");
const mongoose = require("mongoose");

const app = express();

/**
 * testing the root route
 */
app.get("/api/v1/", (req, res) => {
  res.json("Welcome to COnnectdev API");
});

/**
 * Db config
 */
const db = require("../config/keys").mongoURI;

/**
 * connect to mongodb
 */
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("db connected"))
  .catch(err => console.log(err));

app.get("*", (req, res) => {
  res.json({
    status: 404,
    error: "The page does not exist, Kindly visit /api/v1"
  });
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
