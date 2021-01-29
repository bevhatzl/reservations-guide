const router = require("express").Router();
const bulletinController = require("../../controllers/bulletinController");


router.route("/api/bulletin")
  .post(bulletinController.create);

  router.route("/api/bulletins")
  .get(bulletinController.findAll);

  module.exports = router;