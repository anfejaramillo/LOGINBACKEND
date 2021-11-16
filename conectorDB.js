//requires
let mongoDB = require("mongodb").MongoClient;
let dbConfig = require("./dbConfig");
//definitions
async function testConnection() {
  try {
    let connection = await mongoDB.connect(dbConfig.connectionString);
    if ((await connection.db(dbConfig.dbName).collections()).length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (ex) {
    return false;
  }
}

async function consultarDatos(collectionName, filtro) {
  try {
    let connection = await mongoDB.connect(dbConfig.connectionString);
    let db = connection.db(dbConfig.dbName);
    let cursor = db.collection(collectionName).find(filtro);
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
