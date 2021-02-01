const router = require("express").Router();
const blacklistController = require("../../controllers/blacklistController");


router.route("/api/blacklist")
  .post(blacklistController.create);

router.route("/api/blacklists/:guest_name/:guest_DOB/:id_search")
  .get(blacklistController.find);

module.exports = router;