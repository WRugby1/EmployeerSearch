const router = require("express").Router();
const htmlRoutes = require("./html-routes");
const apiRoutes = require("./api");
const loginRoutes = require("./login-api-routes");

router.use("/", htmlRoutes);

router.use("/api", apiRoutes);

router.use("/auth", loginRoutes);

module.exports = router;
