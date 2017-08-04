const http = require('http');
const server = http.createServer((req, res) => {
    //do stuff
    res.end('<h1>Hey!</h1>');
    //this is a method and it ends the convo and send it off
});

server.listen(8888)