// /*********************************************************************************/
// // api-routes.js - this file offers a set of routes for displaying and saving data to the db
// // 
// // Requiring our models
// var db = require("../models");

// // Routes
// // =============================================================
// module.exports = function(app) {

//   // GET route for getting all of the contactss
//   app.get("/api/all", function(req, res) {
//     console.log("This is working");
//     db.Contacts.findAll({}).then(function(dbContacts) {
//       res.json(dbContacts);
//     });
//   });

//   app.post("/api/new", function(req, res) {
//     console.log("New Contact:");
//     console.log(req.body);
//     db.Contacts.create({
//       first_name: req.body.first_name,
//       last_name: req.body.last_name,
//       email: req.body.email,
//       phone_number: req.body.phone_number,
//       CompanyId: req.body.CompanyId
//     }).then(function(theContact) {
//       res.json(theContact);
//     })
//   });
//  // DELETE route for deleting contactss
//  app.delete("api/contact/:id", function(req, res) {
//   db.Contacts.destroy({
//     where: {
//       id: req.params.id
//     }
//   }).then(function(dbContacts) {
//     res.json(dbContacts);
//   });
// });

// // PUT route for updating contactss
// app.put("api/contact", function(req, res) {
//   db.Contacts.update(
//     req.body,
//     {
//       where: {
//         id: req.body.id
//       }
//     }).then(function(dbContacts) {
//     res.json(dbContacts);
//   });
// });

  
// };
