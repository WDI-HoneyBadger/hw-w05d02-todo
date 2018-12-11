var connection = require('../db/dbconfig');

var todo = {};

todo.getAll = function(req, res, next){
    connection.manyOrNone("SELECT * FROM todolist;")
    .then(function(result){
        console.log('done');
        res.locals.todoList = result;
        next();
    }).catch(function(err){
        console.log(err);
        next();
    });
}

todo.find = function(req, res, next){
    connection.oneOrNone("SELECT * FROM todolist WHERE id = $1;",[req.params.id])
    .then(function(result){
        res.locals.todo = result; 
        next();
    }).catch(function(err){
        console.log(err);
        next();
    });
};

todo.create = function(req, res, next){
    connection.one("INSERT INTO todolist(subject,content) VALUES($1, $2) RETURNING id;",
    [req.body.subject, req.body.content])
    .then(function(result){
        res.locals.todo_id = result.id;
        next();
    }).catch(function(err){
        console.log(err);
        next();
    });
}

todo.update = function(req, res, next){
    var todoData = {
        subject: req.body.subject,
        content: req.body.content
    }
    connection.one("UPDATE todolist SET subject=$1, content=$2 WHERE id=$3 RETURNING id;",
    [todoData.subject, todoData.content, req.params.id])
    .then(function(result){
        res.locals.todo_id = result.id;
        next();
    }).catch(function(err){
        console.log(err);
        next();
    });
}

todo.delete = function(req, res, next){
    connection.none("DELETE FROM todolist WHERE id=$1;",[req.params.id])
    .then(function(){
        next();
    }).catch(function(err){
        console.log(err);
        next();
    });
}

module.exports = todo;