const express = require("express");

const app = express();

const body_parser = require("body-parser");

const mongoose = require("mongoose");

const PORT = 3000;

const DB_URL = "mongodb://0.0.0.0:27017/admin";

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  year: String,
});

const Book = mongoose.model("book", bookSchema);

app.use(body_parser.json());

mongoose
  .connect(DB_URL, {})
  .then(() => console.log("Connected to Mongo DB"))
  .catch((err) => console.log("Cannot connect to mongo_DB", err));

app.post("/newBook", async (req, res) => {
  const book = new Book(req.body);
  try {
    const saved_Book = await book.save();
    res.status(200).send(`Book added successfully :, ${saved_Book}`);
  } catch (err) {
    res.status(400).send(`Can't able to create the book ${err.message}`);
  }
});

app.get("/getBooks", async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).send(books);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.get("/getBook/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(203).send(book);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.put("/updateBook/:id", async (req, res) => {
  try {
    const updated_Book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(203).send(updated_Book);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.delete("/deleteBook/:id", async (req, res) => {
  try {
    const result = await Book.findByIdAndDelete(req.params.id);
    if (result) {
      res.status(203).send(result);
    }
    res.status(402).send("Book not found");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.listen(PORT, () => {
  console.log(" Server is running on the port :", PORT);
});
