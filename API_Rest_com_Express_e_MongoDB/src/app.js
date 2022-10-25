import express from "express";
import db from "./config/dbConnect.js"
import books from "./models/Book.js"

db.on("error", console.log.bind(console, "Erro de conexão com o MongoDB"));
db.once("open", () => {
  console.log("Conexão com o MongoDB feita com sucesso!")
});

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node");
});

app.get("/livros", (req, res) => {
  books.find((err, books) => {
    res.status(200).json(books);
  });
});

app.get("/livros/:id", (req, res) => {
  let index = findBook(req.params.id);
  res.json(books[index]);
});

app.post("/livros", (req, res) => {
  books.push(req.body);
  res.status(201).send("Livro cadastrado com sucesso!");
});

app.put("/livros/:id", (req, res) => {
  let index = findBook(req.params.id);
  books[index].titulo = req.body.titulo;
  res.json(books);
});

app.delete("/livros/:id", (req, res) => {
  let {id} = req.params;
  let index = findBook(id);
  books.splice(index, 1);
  res.send(`Livro ${id} removido com`);
});

function findBook(id) {
  return books.findIndex(book => book.id == id);
};

export default app;