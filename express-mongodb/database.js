const {MongoClient} = require('mongodb'); // for connection mongodb server
const url = 'mongodb://127.0.0.1:27017'  

const dbName= 'myDataBase';    // this is folder name of mongo compass

const client = new MongoClient(url);
const cunnectDataBase=async()=>{
try{
    await  client.connect();
    const db = client.db(dbName);
    console.log("Connected successfully to database");
    return db;
}
catch(error){
    console.log(error)
}
}
cunnectDataBase()

module.exports={cunnectDataBase}
