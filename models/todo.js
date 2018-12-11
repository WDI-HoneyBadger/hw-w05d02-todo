var db = require('../db/dbconfig');
var todo = {};


todo.getAll = function(req, res, next){
   db.manyOrNone("SELECT * FROM todo;")
   .then(function(result){
        res.locals.todo = result;
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}
// find + create 
todo.find = function(req, res, next){
    var id = req.params.id;
    connection.oneOrNone("SELECT * FROM todo WHERE id=$1;", [id])
    .then(function(result){
        res.locals.todo = result;
        next();
    })
    .catch(function(error){
        console.log(error);
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
        console.log(error);
        next();
    })
    // + update and delete 
};