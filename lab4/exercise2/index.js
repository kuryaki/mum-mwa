
const { cpus, freemem } = require('os');
const prettyBytes = require('pretty-bytes');

function checkSystem() {
    console.log('Checking your system');
    console.log(cpus(), prettyBytes(freemem()));
}

checkSystem();