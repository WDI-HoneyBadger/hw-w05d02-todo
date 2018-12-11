var connection = require('../db/dbconfig');

var todo = {};

todo.getAll = function(req, res, next){
    connection.manyOrNone("SELECT * FROM todo;")
    .then(function(result){
        res.locals.todoList = result;
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
      })
}

todo.find = function(req, res, next){
    connection.one("SELECT * FROM todo WHERE id = $1;", [req.params.id])
    .then(function(result){
        res.locals.todo = result;
        next();
    })
    .catch(function(error){
        console.log('this is find function', error)
        next();
    })
}

todo.create = function(req, res, next){
    connection.one("INSERT INTO todo (subject, content) VALUES($1, $2) RETURNING id;", [req.body.subject, req.body.content])
    .then(function(result){
        res.locals.todo_id = result.id;
        next();
    })
    .catch(function(error){
        console.log('this is create function', error)
        next();
    })
}

todo.update = function(req, res, next){
    console.log(req.body.subject, req.body.content);
    connection.one('UPDATE todo SET subject = $1, content = $2 WHERE id=$3 RETURNING id;',
     [req.body.subject, req.body.content, req.params.id])
     .then(function(result){
         res.locals.todo_id = result.id;
         next();
     })
     .catch(function(error) {
        console.log('this is update function', error)
        next();
    })
}

todo.delete = function(req, res, next){
    connection.one("DELETE FROM todo WHERE id = $1;", [req.params.id])
    .then(function(){
        next()
    })
    .catch(function(error){
        console.log('this is delete function', error)
        next();
    })
}

module.exports = todo;