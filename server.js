// Requiring necessary npm packages
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("./config/passport");

// Setting up port and requiring models for syncing
const port = process.env.PORT || 8080
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

const routes = require("./routes");
app.use(routes);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync({ force: true }).then(function() {
  app.listen(port, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", port, port);
  });
});
