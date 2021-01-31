const router = require("express").Router();
const blacklistController = require("../../controllers/blacklistController");


router.route("/api/blacklist")
  .post(blacklistController.create);

  router.route("/api/blacklists")
  .get(blacklistController.find);

  module.exports = router;