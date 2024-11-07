const express = require('express');
const app = express();
const port = 3000;

const path = require('path');

const users = require('./users');

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json());

const basePath = path.join(__dirname, 'templates');

let checkAuth = (req, res, next) => {
  req.authStatus = true;
  if (req.authStatus) {
    console.log('Usuário autenticado');
    next();
  }else{
    console.log('Usuário não autenticado');

  }
}

app.use(checkAuth);
app.use('/users', users);

// app.get('/users/add', (req, res) => {
//   res.sendFile(`${basePath}/userform.html`)
// });

// app.post('/users/save', (req, res) => {
//   console.log(req.body);
//   const name = req.body.name;
//   const age = req.body.age;
//   console.log(`O nome do usuário(a) é ${name} e ele(a) tem ${age} anos`);
//   res.sendFile(`${basePath}/users.html`);
// });

// app.get('/users/:id', (req, res) => {
//   console.log(`Carregando usuário: ${req.params.id}`);
//   res.sendFile(`${basePath}/users.html`);
// });

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

