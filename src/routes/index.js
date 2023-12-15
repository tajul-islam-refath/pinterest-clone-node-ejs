const route = require("express").Router();

// index page
route.get("/", function (req, res) {
  res.render("index");
});

module.exports = route;
