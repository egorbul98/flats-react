import favicon from "serve-favicon";
const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./public/db.json');
const middlewares = jsonServer.defaults({
  static: './build'
})

const port = process.env.PORT || 8080;

server.use(favicon(path.join(__dirname, "./build/favicon.ico")));
server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log('SERVER IS RUNNING');
})
