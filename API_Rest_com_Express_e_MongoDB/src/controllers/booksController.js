import books from "../models/Book.js";

class BookController {
  static listBooks = (req, res) => {
    books.find()
      .populate("author")
      .exec((err, books) => {
        res.status(200).json(books);
    });
  };

  static getBook = (req, res) => {
    const id = req.params.id;

    books.findById(id)
      .populate("author", "name")
      .exec((err, book) => {
      if(err) {
        res.status(400).send({message: `${err.message} - ID do livro não localizado.`});
      } else {
        res.status(200).send(book);
      }
    });
  };

  static registerBook = (req, res) => {
    let book = new books(req.body);

    book.save((err) => {
      if(err) {
        res.status(500).send({message: `${err.message} - falha  ao cadastrar livro.`});
      } else {
        res.status(201).send(book.toJSON());
      }
    });
  };

  static updateBook = (req, res) => {
    const id = req.params.id;

    books.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: "Livro atualizado com sucesso!"});
      } else {
        res.status(500).send({message: err.message});
      }
    });
  };

  static deleteBook = (req, res) => {
    const id = req.params.id;

    books.findByIdAndDelete(id, (err, book) => {
      if(err) {
        res.status(400).send({message: `${err.message} - ID do livro não localizado.`});
        //res.status(500).send({message: err.message});
      } else {
        res.status(200).send(`Livro "${book.title}" (ID: ${id}) removido com sucesso!`);
      }
    });
  };
};

export default BookController;