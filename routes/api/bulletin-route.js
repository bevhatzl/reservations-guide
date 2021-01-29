const router = require("express").Router();
const bulletinController = require("../../controllers/bulletinController");


router.route("/api/bulletin")
  .post(bulletinController.create);

  module.exports = router;