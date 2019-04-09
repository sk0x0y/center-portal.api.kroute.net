const router = require("express").Router();
const controller = require("./controller");

router.route("/api/v1/auth/token").post(controller.post);

module.exports = router;
