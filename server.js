const http = require('node:http');
const readFiles = require('./readFiles');
const writeFiles = require('./writeFiles');
const appendFiles = require('./apprendFiles');
const sum = require('./sum');

const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

readFiles();
writeFiles();
appendFiles();
console.log(sum(1,1));


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});