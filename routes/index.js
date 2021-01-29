const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/user-routes");
const blacklistRoutes = require("./api/blacklist-routes");
const bulletinRoute = require("./api/bulletin-route");

// API Routes
router.use(apiRoutes);
router.use(blacklistRoutes);  
router.use(bulletinRoute);   

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
