const { dbCunnection } = require("./db");

async function main() {
  try {
    const db = await dbCunnection();
    const collection = db.collection("Users");
    const data = [
      { name: "John", age: 30 },
      { name: "rakesh", age: 25 },
      { name: "sam", age: 25 },
      { name: "ram", age: 35 },
    ];
  const insertResult = await collection.insertMany(data)
    console.log(`${insertResult.insertedCount} Document inserted`)
  } 
  
  catch (error) {
    console.error("Error performing the task", error);
  }
}
main()
