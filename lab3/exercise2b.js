const { createGzip } = require('zlib');
const { createServer } = require('http');
const { createReadStream } = require('fs');

createServer((request, response) => {
    response.writeHead(200, { 'content-encoding': 'gzip' });
    createReadStream('testImage1.jpg').pipe(createGzip()).pipe(response)
}).listen(4000, '0.0.0.0');
