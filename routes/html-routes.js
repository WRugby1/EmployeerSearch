// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/authentication");

var router = require("express").Router();

router.get("/", function (req, res) {
  // If the user already has an account send them to the members page
  if (req.user) {
    return res.redirect("/mainmenu");
  }
  return res.sendFile(path.join(__dirname, "../public/login.html"));
});

router.get("/login", function (req, res) {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/mainmenu");
  }
  res.sendFile(path.join(__dirname, "../public/login.html"));
});

// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
router.get("/mainmenu", isAuthenticated, function (req, res) {
  res.sendFile(path.join(__dirname, "../public/mainmenu.html"));
});

// contacts route loads cms.html
router.get("/contacts", isAuthenticated, function (req, res) {
  res.sendFile(path.join(__dirname, "../public/contacts.html"));
});

//  companies te loads blog.html
router.get("/companies", isAuthenticated, function (req, res) {
  res.sendFile(path.join(__dirname, "../public/companies.html"));
});

//  companies te loads blog.html
router.get("/jobOpenings", isAuthenticated, function (req, res) {
  res.sendFile(path.join(__dirname, "../public/jobOpenings.html"));
});

//  companies te loads blog.html
router.get("/activities", isAuthenticated, function (req, res) {
  res.sendFile(path.join(__dirname, "../public/activities.html"));
});
module.exports = router;

router.get("/association", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/association.html"));
});
module.exports = router;


// module.exports = function(router) {

//   router.get("/", function(req, res) {
//     // If the user already has an account send them to the members page
//     if (req.user) {
//     return  res.redirect("/mainmenu");
//     }
//    return res.sendFile(path.join(__dirname, "../public/login.html"));
//   });

//   router.get("/login", function(req, res) {
//     // If the user already has an account send them to the members page
//     if (req.user) {
//       res.redirect("/mainmenu");
//     }
//     res.sendFile(path.join(__dirname, "../public/login.html"));
//   });


//   // Here we've add our isAuthenticated middleware to this route.
//   // If a user who is not logged in tries to access this route they will be redirected to the signup page
//   router.get("/mainmenu", isAuthenticated, function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/mainmenu.html"));
//   });

//   // contacts route loads cms.html
//   router.get("/contacts", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/contacts.html"));
//   });

//   //  companies te loads blog.html
//   router.get("/companies", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/companies.html"));
//   });

//   //  companies te loads blog.html
//   router.get("/jobOpening", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/jobOpening.html"));
//   });

//   //  companies te loads blog.html
//   router.get("/activities", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/activities.html"));
//   });

// };
