const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const BlacklistSchema = new Schema({
  hotel_name: {
    type: String,
    required: true
  },
  guest_name: {
    type: String,
    required: true
  },
  ID_number: {
    type: String,
    required: false
  }
});

const Blacklist = mongoose.model("blacklists", BlacklistSchema);

module.exports = Blacklist;