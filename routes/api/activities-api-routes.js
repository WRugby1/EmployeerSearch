var db = require("../../models");
var router = require("express").Router();

// GET route for getting all of the companies
router.get("/all", function (req, res) {
  console.log("This is working");
  db.Activity.findAll({}).then(function (dbActivity) {
    res.json(dbActivity);
  });
});

router.get("/", function (req, res) {
  console.log("api/activities was hit");
  db.Activity.findAll({}).then(function (dbActivity) {
    res.json(dbActivity)
  });
});

router.post("/new", function (req, res) {
  console.log("New Activity:");
  console.log(req.body);
  db.Activity.create({
    action_item: req.body.action_item,
    jobLocation: req.body.jobLocation,
    resume_file_submitted: req.body.resume_file_submitted,
    due_date: req.body.due_date,
    date_applied: req.body.date_applied,
    interview_date: req.body.interview_date
  });
});
// DELETE route for deleting Activity
router.delete("/:id", function (req, res) {
  db.Activity.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (dbActivity) {
    res.json(dbActivity);
  });
});

// PUT route for updating companies
router.put("/", function (req, res) {
  db.Activity.update(
    req.body,
    {
      where: {
        id: req.body.id
      }
    }).then(function (dbActivity) {
      res.json(dbActivity);
    });
});

module.exports = router;