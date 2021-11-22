//Requires
const mongoClient = require("../conectorDB");
//Implementation

async function getCredentials(req, res){
    console.log(req.body)
    let result = await mongoClient.consultarDatos('credentials',req.body.data)
    res.send(result);
    console.log('End response');
}

module.exports.getCredentials = getCredentials;