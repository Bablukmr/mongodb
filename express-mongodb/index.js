const express = require("express");
const { cunnectDataBase } = require("./database");
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
  
app.get('/', async(req,res)=>{
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

app.listen(3000, () => {
    console.log("server started ....");
  });