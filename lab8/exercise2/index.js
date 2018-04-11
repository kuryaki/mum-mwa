const express = require('express');
const mongojs = require('mongojs');
const db = mongojs('testDB', ['locations']);


const app = express();
app.use(express.json());

db.on('error', (err) => {
    console.log('database error', err)
});

db.on('connect', () => {
    console.log('database connected')
});

db.locations.createIndex({ location: '2d' });

app.post('/locations', (req, res) => {

    /**
     * {
     *  name: 'string'
     *  category: ['string'],
     *  location: [long, lat]
     * }
     */
    db.locations.save(req.body, (err, loc) => {
        res.end(loc);
    });
});

app.get('/search', (req, res) => {

    const [lat, long] = req.body;
    db.locations.find({ location: { $near: [long, lat] } }).limit(3, (err, results) => {
        res.end(results);
    });
});

app.listen(8000, () => {
    console.log('listening on port 8000');
});