//requires
let mongoDB = require("mongodb").MongoClient;
let dbConfig = require("./dbConfig");
//definitions
async function testConnection() {
  try {
    let connection = await mongoDB.connect(dbConfig.connectionString);
    let collections = connection.db(dbConfig.dbName).collections();
    return collections.length > 0;
  } catch (ex) {
    return false;
  }
}

async function consultarDatos(collectionName, filtro) {
  try {
    let connection = await mongoDB.connect(dbConfig.connectionString);
    let db = connection.db(dbConfig.dbName);
    let collection = db.collection(collectionName);
    let cursor = collection.find(filtro)
    let arrayOutPut = [];
    let currentDocument = await cursor.next();
    while (currentDocument) {
        arrayOutPut.push(currentDocument);
        currentDocument = await cursor.next();
    }
    return arrayOutPut;
  } catch (ex) {
    return null;
  }
}

module.exports.testConnection = testConnection;
module.exports.consultarDatos = consultarDatos;
