const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./public/db.json');
const middlewares = jsonServer.defaults({
  static: './build'
})

const PORT = proccess.env.PORT || 4001;

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log('SERVER IS RUNNING');
})