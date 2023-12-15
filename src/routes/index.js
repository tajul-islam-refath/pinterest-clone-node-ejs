const route = require("express").Router();
const User = require("./user");

// login page
route.get("/", function (req, res) {
  res.render("index");
});

// login post route
route.post("/login", async function (req, res) {
  let user = await User.findOne({ username: req.username });
  // console.log(user);
  if (!user) {
    return res.redirect("/");
  }

  if (user.password != req.password) {
    return res.redirect("/");
  }

  res.redirect("/profile");
});

// register get
route.get("/register", function (req, res) {
  res.render("register");
});

// register post
route.post("/register", function (req, res) {
  const user = new User({
    usename: req.body.username,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  user.save();
  res.redirect("/profile");
});

module.exports = route;
