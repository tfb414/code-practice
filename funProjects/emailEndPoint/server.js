const http = require('http');
const database = require('./fakeDatabase');
const service = require('./service');

const hostname = 'localhost';
const port = 3001;
const baseUrl = `http://${hostname}:${port}/`

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    if (req.method === 'GET' && req.url === '/user' && !!req.headers.email) {
        res.end(service.returnEmail(req.headers.email));
    }
    res.end('closing');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});