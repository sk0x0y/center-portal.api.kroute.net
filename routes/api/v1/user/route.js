const router = require("express").Router();
const controller = require("./controller");

router.route("/api/v1/user/:idx").get(controller.get);
router
  .route("/api/v1/user")
  .get(controller.getAll)
  .post(controller.post);

module.exports = router;
