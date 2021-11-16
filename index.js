//Server Configuration
const PORT = 8080;
//requires
const express = require("express");
//includes from project
let dbConfig = require("./dbConfig");
const mongoClient = require("./conectorDB");
//Inicializacion del servidor
const app = express();
//Enrutamiento
app.get("/", (req, res) => {
  res.send("Hello World!!!!!!!!");
});
//Server wake up
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

mongoClient.consultarDatos("credentials", {}).then(function (r) {
  console.log(r);
});
