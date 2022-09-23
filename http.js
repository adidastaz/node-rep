const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
    res.write('HELLO AND WELCOME!');
    res.end();
});

server.listen(5000);

//npm on google very usefull

