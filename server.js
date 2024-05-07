const http = require('node:http');
const handlRequest = require('./routes');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(handlRequest);

server.listen(port, hostname, () => { 
    console.log(`Server running at http://${hostname}:${port}/`)
});