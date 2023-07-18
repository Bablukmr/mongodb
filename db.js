const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const dbName = "myDataBase";

// async function main() {
//   await client.connect();
//   console.log("connected successfuly to sevrer");
//   const db = client.db(dbName);
// }

const dbCunnection= async()=>{
    try{
        await client.connect();
        console.log("connected successfuly to sevrer");
        const db = client.db(dbName)
        return db
    }
catch{
    console.error('Failed to connect to server')
    throw error;
}
}
module.exports={dbCunnection}