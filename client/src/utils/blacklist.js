const router = require("express").Router();
const blacklistController = require("../../controllers/blacklistController");

// Matches with "/api/blacklist"
router.route("/api/blacklist")
  .post(blacklistController.create);



module.exports = router;