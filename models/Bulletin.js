const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const BulletinSchema = new Schema({
  hotel_name: {
    type: String,
    required: true
  },
  bulletin_title: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  entry_date: {
    type: Date,
    default: Date.now
  }
});

const Bulletin = mongoose.model("bulletins", BulletinSchema);

module.exports = Bulletin;