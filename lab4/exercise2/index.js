
const { cpus, totalmem } = require('os');
const prettyBytes = require('pretty-bytes');

function checkSystem() {
    console.log('Checking your system');
    if (totalmem() < 2e9) {
        return console.log('This app needs at least 2GB of RAM');
    }
    if (cpus().length < 2) {
        return console.log('Processor is not supported');
    }
    console.log('System is checked succesfully');
    // console.log(cpus(), prettyBytes(totalmem()));
}

checkSystem();