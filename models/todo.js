var connection = require('../db/dbConfig');

var todo = {};

todo.getAll = function(req, res, next){
    connection.manyOrNone("SELECT * FROM todo;").then(function(result){
        res.locals.todo = result;
        next();
    }).catch(function(error){
        console.log(error);
    });
}

todo.find = function(req, res, next){
    var id = req.params.id;
    connection.oneOrNone("SELECT * FROM todo WHERE id=$1;", [id])
    .then(function(result){
        res.locals.todo = result;
        next();
    }).catch(function(error){
        console.log(error);
        next();
    })
}

todo.create = function(req, res, next){
    connection.one("INSERT INTO todo(subject, content) VALUES($1, $2) RETURNING id;", [req.body.subject, req.body.content])
    .then(function(result){
        res.locals.todo_id = result.id;
        next();
    }).catch(function(error){
        console.log(error);
        next();
    })
};

todo.delete = function(req, res, next){
    connection.none("DELETE FROM todo WHERE id=$1;", [req.params.id])
    .then(function(){
        console.log("successful delete")
        next();
    }).catch(function(error){
        console.log(error);
    });
};

todo.update = function(req, res, next){
    connection.one("UPDATE todo SET subject=$1, content=$2 WHERE id=$3 RETURNING id;", [req.body.subject, req.body.content, req.params.id])
    .then(function(result){
        console.log('seccessful update')
        res.locals.todo_id = result.id;
        next();
    }).catch(function(error){
        console.log(error);
    });
};

module.exports = todo;