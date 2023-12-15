const express = require("express");
const path = require("path");
const app = express();

// import routes
const indexRoute = require("./routes/index");

// set the view engine to ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// index page
app.use(indexRoute);

app.listen(5000, () => {
  console.log("App running...");
});
