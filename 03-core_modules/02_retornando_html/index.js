import { createServer } from 'http';

const port = 3000;

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Ola, este meu primeiro server!</h1>');
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});