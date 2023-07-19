const express = require("express");
const { cunnectDataBase } = require("./database");
const { ConnectionPoolMonitoringEvent } = require("mongodb");
const app = express();

// app.get("/", (req, res) => {
//   res.send('<h1>First Express Code...</h1>')
// });
// app.listen(3000, () => {
//   console.log("server started ....");
// });

/* ***********------------***********************/

// app.get("/bablu", (req, res) => {
//     res.json({name:'Bablu Kumar'})
//   });
  

//GET method
app.get('/users', async(req,res)=>{
try{
const db = await cunnectDataBase();
const collection = db.collection('Users')
const userData= await collection.find().toArray()
res.json(userData)
console.log(userData)
}
catch(error){
console.log(error)
res.status(500).json({error:"internal error"})
}
})

//POST method (insert data in document or cunnections)
app.use(express.json())

app.post('/users', async(req,res)=>{
  console.log(req.body)
  const db = await cunnectDataBase();
  const collection = db.collection('Users')
const result = collection.insertOne(req.body)
// const result = collection.insertMany({name:"shiva",age:' '},{name:"krishna",age:' '})
res.json(result)
})

//PUT method
app.put('/users/:name', async (req, res) => {
  console.log(req.params);
  try {
    const db = await cunnectDataBase();
    const collection = db.collection('Users');
    const result = await collection.updateOne({ name: req.params.name }, { $set: req.body });
    res.json({ message: "User updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal error" });
  }
});


// app.put('/user', async(req,res)=>{
//   const db = await cunnectDataBase();
//   const collection = db.collection('Users')
//   let singleData=await collection.updateOne({name:"shiva"},{$set:{name:"siv shankar",age:" "}})

// })



//DELETE method
app.delete('/users/:name',async(req, res)=>{
  const db = await cunnectDataBase();
  const collection = db.collection('Users');
  const userName = req.params.name
  collection.deleteOne({name:userName})
  // collection.deleteMany({name:userName})
  res.send('deleted')
})


app.listen(3000, () => {
    console.log("server started ....");
  });