const server = require('http').createServer();
const { fork } = require('child_process');

const url = require('url');
const querystring = require('querystring');

server.on('request', (req, res) => {

    const path = querystring.parse(url.parse(req.url).query).url;

    const opts = {
        detached: true,
        silent: true
    };

    const childProcess = fork('filefinder.js', [path], opts);

    childProcess.stdout.pipe(res);

}).listen(4000);
