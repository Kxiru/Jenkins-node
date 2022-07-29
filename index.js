const http = require('http');

const server = http.createServer((req, res) => {

    res.write("Welcome to Node app 😎 ");
    res.end();
});

server.listen(3000);