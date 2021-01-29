const router = require("express").Router();
const bulletinController = require("../../controllers/bulletinController");

// Matches with "/api/bulletin"
router.route("/api/bulletin")

  .post(bulletinController.create);

  router.route("/api/bulletins")

  .get(bulletinController.findAll);


module.exports = router;