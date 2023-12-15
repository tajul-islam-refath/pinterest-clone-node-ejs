const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const createError = require("http-errors");
const cookieParcer = require("cookie-parser");
const logger = require("morgan");
const expressSession = require("express-session");
const passport = require("passport");
const app = express();

// import routes
const indexRoute = require("./routes/index");

// define public folder
app.use(express.static(__dirname + "/public"));

// set the view engine to ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// middleware
app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: "pinterest",
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParcer());

// index page
app.use("/", indexRoute);

// databse connect
const dbUser = "";
const dbPass = "";

const url = `mongodb+srv://${dbUser}:${dbPass}@cluster0.ltldm.mongodb.net/pin?retryWrites=true&w=majority`;
mongoose
  .connect(url)
  .then(() => {
    app.listen(5000, () => {
      console.log(`app listening to port 5000`);
      console.log("database connection successful!");
    });
  })
  .catch((err) => console.log(err));
