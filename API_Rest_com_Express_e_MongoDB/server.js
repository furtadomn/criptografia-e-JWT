const http = require("http");
const port = 3000;

const routes = {
  "/": "Curso de Node",
  "/livros": "Entrei na página de livros",
  "/autores": "Listagem de autores"
};

const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end(routes[req.url]);
});

server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
});