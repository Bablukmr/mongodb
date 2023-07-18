const { dbCunnection } = require("./db");

async function main() {
  try {
    const db = await dbCunnection();
    const collection = db.collection("Users");
  const updatedResult = await collection.updateMany({name:"rakesh"},{$set:{age:21}})
    console.log(`${updatedResult.matchedCount} Document inserted`)
  } 
  
  catch (error) {
    console.error("Error performing the task", error);
  }
}
main()
