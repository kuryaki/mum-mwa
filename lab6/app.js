const express = require('express');
const cors = require('cors');
const csrf = require('csurf');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const parseForm = bodyParser.urlencoded({ extended: false });
const csrfProtection = csrf({ cookie: true });
const { savetofile, savetocookie, getfromcookie } = require('./controllers');
const { check, validationResult } = require('express-validator/check');

const app = express();

app.set('case sensitive routing', true);
app.enable('etag');
app.disable('x-powered-by');

app.engine('pug', require('pug').__express);
app.use(express.static('public'));

app.use(cors());
app.use(cookieParser());

app.get('/newsletter', csrfProtection, (req, res) => {
    res.render('form.pug', { csrfToken: req.csrfToken() });
});

app.post('/newsletter',
    parseForm,
    csrfProtection,
    [
        check('email')
            .isEmail()
            .withMessage('must be an email')
            .trim()
            .normalizeEmail()
    ],
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.mapped() });
        }
        next();
    },
    savetofile,
    savetocookie,
    (req, res) => {
        res.redirect('/thankyou');
    });

app.get('/thankyou', getfromcookie, (req, res) => {
    const { email } = req;
    res.end(`Your email ${email} has been added successfully to our subscribers list.`)
});


app.listen(8000, () => {
    console.log('listening on port 8000');
});
