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
    Blacklist
    .find({ $or: [{guest_ID_num: {'$regex': req.params.id_search,$options:'i'}}, {ch_ID_num: {'$regex': req.params.id_search,$options:'i'}}]}) 
    .sort({entry_date: 'descending'})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },

  findNameDOB: function(req, res) {
    Blacklist
    .find({ $and: [{guest_name: {'$regex': req.params.guest_name,$options:'i'}}, {guest_DOB: req.params.guest_DOB}]})  
    .sort({entry_date: 'descending'})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },

  getAllResults: function(req, res) {
    Blacklist
    .find({
      $or: [
        { $and: [{guest_name: {'$regex': req.params.guest_name,$options:'i'}}, {guest_DOB: req.params.guest_DOB}]},
        { $or: [{guest_ID_num: {'$regex': req.params.id_search,$options:'i'}}, {ch_ID_num: {'$regex': req.params.id_search,$options:'i'}}]}
      ]})    
    .sort({entry_date: 'descending'})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }
  
};

