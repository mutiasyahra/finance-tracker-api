const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3000;

// Enable CORS
server.use(middlewares);

// Custom routes (optional)
server.use(jsonServer.rewriter({
  '/api/*': '/$1'
}));

server.use(router);

server.listen(PORT, () => {
  console.log(`Finance Tracker API is running on port ${PORT}`);
});
