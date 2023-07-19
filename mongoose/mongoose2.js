const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/myDataBase");
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
});
const Books = mongoose.model("Books", bookSchema);
//GET method
app.get("/books", async (req, res) => {
  try {
    const books = await Books.find();
    res.json(books);
  } catch (err) {
    console.log("Error", err);
  }
});

//POST method (insert data)
app.use(express.json()); //middleware
app.post("/books", async (req, res) => {
  console.log(req.body);
  try {
    const { title, author } = req.body;
    const newBooks = new Books({ title, author });
    await newBooks.save();
    res.status(201).json(newBooks);
  } catch (err) {
    console.log(err);
  }
});

//PUT method

app.put("/books/:id", async (req, res) => {
  console.log(req.params);
  let { id } = req.params;
  const { title, author } = req.body;
  const updatedBook = await Books.findByIdAndUpdate(id, { title, author });
  res.json(updatedBook);
});

app.listen(3000, () => {
  console.log("server runnig at 3000");
});
