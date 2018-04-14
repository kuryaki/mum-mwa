
const { ObjectID } = require('mongodb');

const list = async (req, res) => {

    const { db } = req.app.locals;

    try {

        const tasks = await db.tasks.find({}).toArray();

        console.log({ tasks });
        res.send({ tasks });
    } catch (err) {
        console.log(err);
        res.send(err);
    }

};

const create = (req, res) => {

    const { db } = req.app.locals;

    const task = req.body;

    db.tasks.create(task, (err, task) => {
        res.end(task);
    });

};


const complete = (req, res) => {

    const { db } = req.app.locals;

    const taskId = req.params.id;

    const opts = {
        new: true
    }

    db.tasks.update({ _id: ObjectID(taskId) }, { $set: { completed: true } }, opts, (err, task) => {
        res.end(task);
    });

};


const remove = (req, res) => {

    const { db } = req.app.locals;

    db.tasks.remove({ _id: ObjectID(taskId) }, (err, ok) => {
        res.end(ok);
    });

};


const completed = (req, res) => {

    const { db } = req.app.locals;

    db.tasks.find({ completed: true }, (err, tasks) => {
        res.end(tasks);
    });
};



module.exports = {
    list,
    create,
    complete,
    remove,
    completed
};
