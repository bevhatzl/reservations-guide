import axios from "axios";

export default {
  
  // Saves an entry to the database
  saveBlacklist: function(blacklistData) {
    return axios.post("/api/blacklist", blacklistData);
  },

  getBlacklistResults: function(blacklistResults) {
    return axios.get("/api/blacklists", blacklistResults);
  },

  saveBulletin: function(bulletinData) {
    return axios.post("/api/bulletin", bulletinData);
  },

  getBulletins: function(bulletinList) {
    return axios.get("/api/bulletins", bulletinList);
  }

};