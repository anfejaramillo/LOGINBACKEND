//Server Configuration
const PORT = 8080;
//requires
var bodyParser = require('body-parser')
const express = require("express");
var cors = require('cors')
//includes from project
const mongoClient = require("./conectorDB");
const getCredentials = require('./routes/getCredentials').getCredentials;
//Inicializacion del servidor
const app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
//Enrutamiento
app.get("/", (req, res) => {
  res.send("Welcome to HomePage");
});
//API REST
app.post("/credential", getCredentials);
//Server wake up
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});