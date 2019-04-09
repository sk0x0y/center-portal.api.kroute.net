const router = require("express").Router();
const controller = require("./controller");

router.route("/api/v1/user/:idx").get(controller.get);

module.exports = router;
