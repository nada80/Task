const express = require("express")
const router = express.Router();
const fs = require('fs');
const gamesRoutes = require('./games.js') 
router.use(gamesRoutes) 

module.exports = router;


