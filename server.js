import http from "http";

const port = 3000;

const rotas = {
    "/": "Curso de node.js",
    "/express": "curso de express"
}
const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-Type":"text/plain"});
    res.end(rotas[req.url]);
  });

  server.listen(3000, () => {
    console.log("servidor escutando!");
  })