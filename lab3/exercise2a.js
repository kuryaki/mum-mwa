'use strict';

const server = require('http').createServer();

server.on('request', (req, res) => {
    require('fs').createReadStream('testImage2.jpg').pipe(res);
});

server.listen(4000);
