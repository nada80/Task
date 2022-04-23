const express = require('express');
const fs = require('fs');
const cors = require('cors');
// create our express app
const app = express()
app.use(cors());

// route
const routes = require('./routes/Routes')
app.use('/', routes)



//start server
app.listen(3000, () => console.log('Example app listening on port 3000!'))