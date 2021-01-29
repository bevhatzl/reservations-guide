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
  guest_DOB: {
    type: String,
    required: true
  },
  guest_st_address: {
    type: String
  },
  guest_city: {
    type: String
  },
  guest_country: {
    type: String
  },
  guest_phone: {
    type: Number 
  },
  guest_ID_num: {
    type: String,
    required: true
  },
  guest_ID_type: {
    type: String,
    required: true
  },
  pay_method: {
    type: String
  },
  ch_name: {
    type: String
  },
  ch_DOB: {
    type: String
  },
  ch_ID_num: {
    type: String
  },
  ch_ID_type: {
    type: String
  },
  reason: {
    type: String
  },
  description: {
    type: String
  },
  entry_date: {
    type: Date,
    default: Date.now
  }
});

const Blacklist = mongoose.model("blacklists", BlacklistSchema);

module.exports = Blacklist;