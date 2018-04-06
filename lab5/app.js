const express = require('express');
const { promises, observable, async } = require('./controllers');

const app = express();
app.set('case sensitive routing', true);
app.enable('etag');
app.disable('x-powered-by');

app.engine('pug', require('pug').__express)


app.get('/', (req, res) => {
    res.render('home.pug');
});

const render = (req, res) => {
    const users = req.users;
    res.render('users.pug', { users });
}

app.get('/promises', promises, render);
app.get('/observable', observable, render);
app.get('/async', async, render);


app.listen(8000, () => {
    console.log('listening on port 8000');
});
