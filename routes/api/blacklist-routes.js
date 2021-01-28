const router = require("express").Router();
const blacklistController = require("../../controllers/blacklistController");


router.route("/addlisting")
  .post(blacklistController.create);

