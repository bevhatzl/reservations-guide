const router = require("express").Router();
const blacklistController = require("../../controllers/blacklistController");


router.route("/api/blacklist")
  .post(blacklistController.create);

  module.exports = router;