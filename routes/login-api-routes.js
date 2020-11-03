// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our  model
var db = require("../models");
var passport = require("../config/passport");

var router = require("express").Router();


router.post("/login", passport.authenticate("local"), function (req, res) {
  res.json("/mainmenu");
});
router.post("/login/:email/:password", passport.authenticate("local"), function (req, res) {
  res.json("/mainmenu");
});

router.post("/signup", function (req, res) {
  console.log(req.body);
  db.User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword
  }).then(function (user) {
    // res.redirect(307, "/login");
    // res.json({path: "/mainmenu"});
    res.json("/mainmenu");
  }).catch(function (err) {
    console.log(err);
    // res.json(err);
    res.status(422).json(err.errors[0].message);
  });
});
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

router.get("/user_data", function (req, res) {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({});
  }
  else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  }
});



module.exports = router;

// module.exports = function(app){

//     app.post("/auth/login", passport.authenticate("local"), function(req, res) {
//         res.json("/mainmenu");
//     });

//     app.post("/auth/signup", function(req, res) {
//         console.log(req.body);
//         db.User.create({
//           firstName: req.body.firstName,
//           lastName: req.body.lastName,
//           email: req.body.email,
//           password: req.body.password,
//           confirmPassword: req.body.confirmPassword
//         }).then(function() {
//           res.redirect(307, "/auth/mainmenu");
//         }).catch(function(err) {
//           console.log(err);
//           // res.json(err);
//           res.status(422).json(err.errors[0].message);
//         });
//       });
//       app.get("/logout", function(req, res) {
//         req.logout();
//         res.redirect("/");
//       });

//       app.get("/auth/user_data", function(req, res) {
//         if (!req.user) {
//           // The user is not logged in, send back an empty object
//           res.json({});
//         }
//         else {
//           // Otherwise send back the user's email and id
//           // Sending back a password, even a hashed password, isn't a good idea
//           res.json({
//             email: req.user.email,
//             id: req.user.id
//           });
//         }
//       });

//     };
