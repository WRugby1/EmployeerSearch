var router = require("express").Router();
var htmlRoutes = require("./html-routes");
var apiRoutes = require("./api");
var loginRoutes = require("./login-api-routes");

router.use("/", htmlRoutes);

router.use("/api", apiRoutes);

router.use("/auth", loginRoutes);

module.exports = router;
