const server = require('http').createServer();
const { fork } = require('child_process');

const { parse } = require('url');
// const querystring = require('querystring');

server.on('request', (req, res) => {

    const { query: { url: path } } = parse(req.url, true);

    const opts = {
        detached: true,
        silent: true
    };

    const childProcess = fork('filefinder.js', [path], opts);

    childProcess.stdout.pipe(res);

}).listen(4000);
