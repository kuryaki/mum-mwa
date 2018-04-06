const fetch = require('node-fetch');
const { Observable } = require('@reactivex/rxjs');
const url = 'http://jsonplaceholder.typicode.com/users/';

const promises = (req, res, next) => {

    fetch(url)
        .then(res => res.json())
        .then(users => {
            req.users = users;
        })
        .then(next);
};

const observable = (req, res, next) => {

    const response = fetch(url).then(res => res.json());

    const stream = Observable.fromPromise(response);
    stream.subscribe(users => {
        req.users = users;
    }, next, next);

}

const async = async (req, res, next) => {

    const response = await fetch(url);
    const users = await response.json();
    req.users = users;

    next()
};

module.exports = {
    promises,
    observable,
    async
}