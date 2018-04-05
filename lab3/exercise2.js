'use strict';

const server = require('http').createServer();

server.on('request', (req, res) => {
    const img = require('fs').createReadStream('testImage2.jpg');

    img.on('data', (data) => {
        if(!res.write(data)){
            img.pause();
        }
    });

    res.on('drain', () => {
        img.resume();
    });

    img.on('end', () => {
        res.end();
    })

});

server.listen(4000);
