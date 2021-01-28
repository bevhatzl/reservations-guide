const db = require("../models/Blacklist");

// Defining methods for the blacklistController
module.exports = {
  
  create: function(req, res) {
    db.Blacklist
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
};