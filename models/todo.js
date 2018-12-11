const connection = require('../db/dbconfig');

var todo = {};

todo.getAll = function (req, res, next) {
    connection.manyOrNone("SELECT * FROM todo;")
        .then(function (result) {
            res.locals.todos = result;
            next();
        })
        .catch(function (err) {
            console.log(err);
            next();
        })
}

todo.find = function (req, res, next) {
    var id = req.params.id;
    connection.one("SELECT * FROM todo WHERE id = $1;", [id])
        .then(function (result) {
            res.locals.todo = result;
            next();
        })
        .catch(function (err) {
            console.log(err);
            next();
        })
}

todo.create = function (req, res, next) {
    connection.one("INSERT INTO todo (subject, content) VALUES ($1, $2) RETURNING id;",
        [req.body.subject, req.body.content])
        .then(function (result) {
            res.locals.todo_id = result.id;
            console.log("created new db entry");
            next();
        })
        .catch(function (err) {
            console.log(err);
            next();
        })
}

todo.delete = function (req, res, next) {
    connection.none("DELETE FROM todo where id=$1;", [req.params.id])
        .then(function () {
            console.log("delete successful");
            next();
        })
        .catch(function (err) {
            console.log(err);
            next();
        })
}

todo.update = function (req, res, next) {
    var todoData = {
        subject: req.body.subject,
        content: req.body.content
    }
    connection.one("UPDATE todo SET subject = $1, content = $2 WHERE id = $3 RETURNING id;",
        [todoData.subject, todoData.content, req.params.id])
        .then(function (result) {
            res.locals.todo_id = result.id;
            next();
        })
        .catch(function (error) {
            console.log(error);
            next();
        })
}

module.exports = todo;