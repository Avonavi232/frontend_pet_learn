const fs = require('fs');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');
const path = require('path');

const dbPath = path.resolve(__dirname, 'db.json');
const server = jsonServer.create();
const router = jsonServer.router(dbPath);

server.use(async (_, __, next) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 800);
  });

  next();
});

server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'Auth Error' });
  }

  return next();
});

server.use(jsonServer.defaults());
server.use(router);

server.post('/login', (req, res) => {
  const { username, password } = req.body;

  const db = JSON.parse(fs.readFileSync(dbPath), 'UTF-8');
  const { users } = db;

  const userFromBd = users.find((user) => user.username === username && user.password === password);

  if (userFromBd) {
    return res.json(userFromBd);
  }

  return res.status(403).json({ message: 'Auth Error' });
});

server.listen(8000, () => console.log('server is running on 8000 port'));
