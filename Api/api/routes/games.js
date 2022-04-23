const express = require("express")
const gamesRoutes = express.Router();
const fs = require('fs');


const dataPath = './Data/games.json' // path to our JSON file

const getGamesData = () => {
    const jsonData = fs.readFileSync(dataPath)
    return JSON.parse(jsonData)   
}


gamesRoutes.get('/games/list', (req, res) => {
    const games = getGamesData()
    res.send(games)
  });
  
  
  module.exports = gamesRoutes
