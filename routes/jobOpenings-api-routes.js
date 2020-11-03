// var db = require("../models");
// /*********************************************************************************/
// // jobOpenings-api-routes.js - this file offers a set of routes for displaying and saving data to the db
// // 

// // Routes
// // =============================================================
// module.exports = function(app) {

//   // GET route for getting all of the contactss
//   app.get("/api/allJobs", function(req, res) {
//     console.log("This is working");
//     db.jobOpenings.findAll({}).then(function(dbJobOpenings) {
//       res.json(dbContacts);
//     });
//   });

//   app.post("/api/newJOb", function(req, res) {
//     console.log("New Contact:");
//     console.log(req.body);
//     db.JobOpenings.create({   //**************************
//     //   first_name: req.body.first_name,
//     //   last_name: req.body.last_name,
//     //   email: req.body.email,
//     //   phone_number: req.body.phone_number
//     });
//   });
//  // DELETE route for deleting contactss
//  app.delete("api/job/:id", function(req, res) {
//   db.jobOpenings.destroy({
//     where: {
//       id: req.params.id
//     }
//   }).then(function(dbjobOpenings) {
//     res.json(dbjobOpenings);
//   });
// });

// // PUT route for updating contactss
// app.put("api/jobUpdate", function(req, res) {
//   db.jobOpenings.update(
//     req.body,
//     {
//       where: {
//         id: req.body.id
//       }
//     }).then(function(dbjobOpenings) {
//     res.json(dbjobOpenings);
//   });
// });

  
// };