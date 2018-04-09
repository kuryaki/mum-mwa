const express = require('express');
const mongojs = require('mongojs');
const db = mongojs('testDB', ['homework7']);


const app = express();

db.on('error', (err) => {
    console.log('database error', err)
});

db.on('connect', () => {
    console.log('database connected')
});

app.get('/secret', (req, res) => {

    const decipher = require('crypto').createDecipher('aes256', 'asaadsaad');

    db.homework7.findOne((err, { message }) => {
        res.end(decipher.update(message, 'hex', 'utf8'));
    });
});

app.listen(8000, () => {
    console.log('listening on port 8000');
});
