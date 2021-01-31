const Blacklist = require("../models/Blacklist");

// Defining methods for the blacklistController
module.exports = {
  
  create: function(req, res) {
      Blacklist
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  find: function(req, res) {
    console.log(req.params)
    Blacklist
    .find({ 
      $or: [
        { $and: [{guest_name: req.params.guest_name}, {guest_DOB: req.params.guest_DOB}]},
        { $or: [{guest_ID_num: req.params.id_search}, {ch_ID_num: req.params.id_search}]}
      ]})    
    .sort({entry_date: 'descending'})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  
};

