var router = require("express").Router();
var contactsRoutes = require("./contacts-api-routes");
var companiesRoutes = require("./companies-api-routes");
var activitiesRoutes = require("./activities-api-routes");
var jobOpeningsRoutes = require("./jobOpenings-api-routes");

router.use("/contacts", contactsRoutes);
router.use("/companies", companiesRoutes);
router.use("/activities", activitiesRoutes);
router.use("/jobOpenings", jobOpeningsRoutes);




module.exports = router;