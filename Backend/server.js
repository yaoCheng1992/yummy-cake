const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = express.Router();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, function(){
    console.log("Server listening on port " + PORT);
});