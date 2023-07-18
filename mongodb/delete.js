const {dbCunnection} = require('./db');

async function main(){

    try{
        const db= await dbCunnection();
        const collection =db.collection('Users')
        const filter ={name:"sam"}
      const deletedResult =  await collection.deleteOne(filter);
    //   const deletedResult =  await collection.deleteMany(filter);
      console.log(deletedResult.deletedCount)
    }
    catch (error){console.log("Error", error)}
}
main()