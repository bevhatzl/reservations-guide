import axios from "axios";

export default {
  
  // Saves an entry to the database
  saveBlacklist: function(blacklistData) {
    return axios.post("/api/blacklist", blacklistData);
  },

  saveBulletin: function(bulletinData) {
    return axios.post("/api/bulletin", bulletinData);
  }

};