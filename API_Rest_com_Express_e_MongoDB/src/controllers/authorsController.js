import authors from "../models/Author.js";

class AuthorController {
  static listAuthors = (req, res) => {
    authors.find((err, authors) => {
      res.status(200).json(authors);
    });
  };

  static getAuthor = (req, res) => {
    const id = req.params.id;

    authors.findById(id, (err, author) => {
      if(err) {
        res.status(400).send({message: `${err.message} - ID do(a) autor(a) não localizado.`});
      } else {
        res.status(200).send(author);
      }
    });
  };

  static registerAuthor = (req, res) => {
    let author = new authors(req.body);

    author.save((err) => {
      if(err) {
        res.status(500).send({message: `${err.message} - falha  ao cadastrar autor(a).`});
      } else {
        res.status(201).send(author.toJSON());
      }
    });
  };

  static updateAuthor = (req, res) => {
    const id = req.params.id;

    authors.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: "Nome do(a) autor(a) atualizado com sucesso!"});
      } else {
        res.status(500).send({message: err.message});
      }
    });
  };

  static deleteAuthor = (req, res) => {
    const id = req.params.id;

    authors.findByIdAndDelete(id, (err, author) => {
      if(err) {
        res.status(400).send({message: `${err.message} - ID do(a) autor(a) não localizado.`});
        //res.status(500).send({message: err.message});
      } else {
        res.status(200).send(`Autor(a) "${author.name}" (ID: ${id}) removido com sucesso!`);
      }
    });
  };
};

export default AuthorController;