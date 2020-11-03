
// // Dependencies
// var express = require("express");
// var exphbs = require("express-handlebars");


// // // Dependencies
// // var express = require("express");
// // var exphbs = require("express-handlebars");
// // var passport = require("./config/passport");




// // Set Handlebars as the default templating engine.
// // app.engine("handlebars", exphbs({
// //     defaultLayout: "main"
// // }));
// // app.set("view engine", "handlebars");

// // // Set the port of our application
// // // process.env.PORT lets the port be set by Heroku
// // var PORT = process.env.PORT || 8080;
// // var db = require("./models");


// // // Creating express app and configuring middleware needed for authentication
// // var app = express();
// // app.use(bodyParser.urlencoded({ extended: false }));
// // app.use(bodyParser.json());
// // app.use(express.static("public"));


// // // We need to use sessions to keep track of our user's login status
// // app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// // app.use(passport.initialize());
// // app.use(passport.session());



// // // // Set Handlebars as the default templating engine.
// // // app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// // // app.set("view engine", "handlebars");

// // // var express = require("express");
// // // var bodyParser = require("body-parser");

// // // //setup express app
// // // var app = express();
// // // var PORT = process.env.PORT || 8080;

// // // // Requiring our models for syncing
// // // var db = require("./models");

// // // //Setup Express app to handle data parsing

// // // //parse aplication/x-www-form-urlencoded
// // // app.use(bodyParser.urlencoded({extended: true}));

// // // //parse application/jsondata
// // // app.use(bodyParser.json());

// // // //static directory to be served
// // // app.use(express.static("public"));


// // // //Routes
// // // //=============================
// // // require("./routes/api-routes.js")(app);

// // // //HTML routes
// // // require("./routes/html-routes.js")(app);

// // // //Start the server to bigin to listen
// // // //==========================================


// // // Requiring our routes
// // require("./routes/html-routes.js")(app);
// // require("./routes/api-routes.js")(app);


// // db.sequelize.sync().then(function() {
// //     app.listen(PORT, function() {
// //       console.log("App listening on PORT: " + PORT);
// //     });
// //   });


// // Requiring necessary npm packages
// var express = require("express");
// var bodyParser = require("body-parser");
// var session = require("express-session");
// // Requiring passport as we've configured it
// var passport = require("./config/passport");

// // Setting up port and requiring models for syncing
// var PORT = process.env.PORT || 8080;
// var db = require("./models");


// //Setup Express app to handle data parsing

// //parse aplication/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

// //parse application/jsondata

// // Creating express app and configuring middleware needed for authentication
// var app = express();
// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(bodyParser.json());
// app.use(express.static("public"));
// // We need to use sessions to keep track of our user's login status
// app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

// // Requiring our routes
// require("./routes/html-routes.js")(app);
// require("./routes/login-api-routes.js")(app);


// //Start the server to bigin to listen

// db.sequelize.sync({
//     force: false
// }).then(function () {
//     app.listen(PORT, function () {
//         console.log("App listening on PORT: " + PORT);
//     });

// });


// Requiring necessary npm packages
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");

// Setting up port and requiring models for syncing
var port = process.env.PORT || 8000
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
// require("./routes/html-routes.js")(app);
// require("./routes/login-api-routes.js")(app);
// require("./routes/contacts-api-routes.js")(app);
// require("./routes/companies-api-routes.js")(app);
// require("./routes/jobOpenings-api-routes.js")(app);
// require("./routes/activities-api-routes.js")(app);
// require("./routes/html-routes.js")(app);
// require("./routes/login-api-routes.js")(app);
// require("./routes/contacts-api-routes")(app);
// require("./routes/companies-api-routes.js")(app);

//Refactoring routes

var routes = require("./routes");
app.use(routes);



// Syncing our database and logging a message to the user upon success
db.sequelize.sync({ force: false }).then(function() {
  app.listen(port, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", port, port);
  });
});

