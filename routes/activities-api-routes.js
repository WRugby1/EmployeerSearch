//  var db = require("../models");
// /*********************************************************************************/
// // activities-api-routes.js - this file offers a set of routes for displaying and saving data to the db
// // 

// // Routes
// // =============================================================
// module.exports = function(app) {

//   // GET route for getting all of the contactss
//   app.get("/api/allActivities", function(req, res) {
//     console.log("This is working");
//     db.Activitiess.findAll({}).then(function(dbActivities) {
//       res.json(dbActivitiess);
//     });
//   });

//   app.post("/api/newActivity", function(req, res) {
//     console.log("New Activity:");
//     console.log(req.body);
//     db.Activities.create({ // *****************************
//     //   first_name: req.body.first_name,
//     //   last_name: req.body.last_name,
//     //   email: req.body.email,
//     //   phone_number: req.body.phone_number
//     });
//   });
//  // DELETE route for deleting contactss
//  app.delete("api/Activity/:id", function(req, res) {
//   db.jobOpenings.destroy({
//     where: {
//       id: req.params.id
//     }
//   }).then(function(dbActivities) {
//     res.json(dbActivites);
//   });
// });

// // PUT route for updating contactss
// app.put("api/activityUpdate", function(req, res) {
//   db.jobActivities.update(
//     req.body,
//     {
//       where: {
//         id: req.body.id
//       }
//     }).then(function(dbActivities) {
//     res.json(dbActivitiess);
//   });
// });

  
// };