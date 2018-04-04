const tick = process.nextTick;

function slow(callback) {

    for(let i=0; i<3e9; i++){}

    if (Math.random() > 0.5) {

        return callback('MyError', null);
    }

    return callback(null, { id: 12345 });
}

function exec(fn) {

    const { error, result } = fn((error, result) => ({ error, result }));

    return {
        done: function (cb) {
            !error && result ? cb(result) : null;
            return this;
        },
        fail: function (cb) {
            error && !result ? cb(error) : null;
            return this;
        }
    }
}

exec(slow)
    .done(console.log)
    .fail(console.log.bind(null, 'Error:'));
