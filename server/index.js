const express = require("express");
const cors = require("cors");

const app = express();
const books = require('./books')

const PORT = process.env.port || 3001;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/books", (req, res) => {
  res.json(books);
});

app.get("/api/books/:id", (req, res) => {
  const id = Number(req.params.id);
  const book = books.find((book) => book.id === id);
  if (book) {
    res.send(book);
  } else {
    res.status(401).json({ message: "no such book" });
  }
});

app.post("/api/books", (req, res) => {
  console.log(req.body.content);
  res.send(req.body);
});

app.use((req, res, next) => {
  res.status(404).json({ error: "unknown route" });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
