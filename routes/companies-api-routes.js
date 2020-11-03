// var db = require("../models");

// module.exports = function(app) {
//     app.get("/api/companies", function(req, res){
//         console.log("api/companies was hit");
//         db.Company.findAll({}).then(function(dbCompany){
//             res.json(dbCompany)
//         });
//     });

//     app.get("/api/companies/:id", function(req, res){
//         db.Company.findOne({
//             where: {
//                 id:req.params.id
//             }
//         }).then(function(dbCompany){
//             res.json(dbCompany);
//         });
//     });

//     app.post("/api/companies", function(req, res){
//         db.Company.create(req.body).then(function(dbCompany){
//             res.json(dbCompany);
//         });
//     });

//     app.post("/api/newCo", function(req, res){
//         console.log("hitting server side companies-api-routes file /api/newCo");
//         db.Company.create(req.body).then(function(dbCompany){
//             res.json(dbCompany);
//             //could console.log(dbCompany) here to help
//         });
//     });

//     app.delete("/api/companies/:id", function(req, res){
//         db.Company.destroy({
//             where: {
//                 id: req.params.id
//             }
//         }).then(function(dbCompany){
//                 res.json(dbCompany);
            
//         });
//     });
// };