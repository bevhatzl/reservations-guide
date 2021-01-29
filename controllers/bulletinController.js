const Bulletin = require("../models/Bulletin");

// Defining methods for the blacklistController
module.exports = {
  
  create: function(req, res) {
      Bulletin
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
};