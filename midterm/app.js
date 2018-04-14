const express = require('express');
const mongojs = require('mongojs');

const app = express();
app.use(express.json());

app.use('/tasks', require('./tasks'));

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, (err, client) => {

    if(err) { throw err; }

    console.log("Connected successfully to server");

    const DB = client.db('testDB');

    app.locals.db = {
        tasks: DB.collection('tasks')
    };

    app.listen(8000, () => {
        console.log('listening on port 8000');
    });
});
