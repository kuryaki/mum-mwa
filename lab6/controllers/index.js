const fs = require('fs');

const savetofile = (req, res, next) => {
    fs.appendFile('subscribers.txt', `${req.body.email}\n`, (err) => {
        if (err) {
            return next(err);
        };
        next();
    });
};

const savetocookie = (req, res, next) => {
    res.cookie('email', req.body.email);
    next();
};


const getfromcookie = (req, res, next) => {
    req.email = req.cookies['email'];
    next();
};


module.exports = {
    savetofile,
    savetocookie,
    getfromcookie
}
