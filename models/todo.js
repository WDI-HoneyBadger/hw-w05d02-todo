var db = require('../db/dbconfig');

var todo = {};

todo.getAll = function(req,res,next){
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

todo.find = function(req,res,next){
    db.oneOrNone("SELECT * FROM todo WHERE id=$1;", [req.params.id])
.then(function(result){
    res.locals.todo = result;
    next();
})
.catch(function(error){
    console.log(error);
    next();
})
}

todo.create = function(req,res,next){
    db.one("INSERT INTO todo(name, explanation, priority) VALUES ($1, $2, $3) RETURNING id;"
    , [req.body.name, req.body.explanation, req.body.priority])
.then(function(result){
    res.locals.todoId = result.id;
    next();
})
.catch(function(error){
    console.log(error);
    next();
})
}

todo.update = function(req,res,next){
    db.one("UPDATE todo SET name=$1, explanation=$2, priority=$3 WHERE id=$4 RETURNING id;"
    , [req.body.name, req.body.explanation, req.body.priority, req.params.id] )
.then(function(result){
    res.locals.todoId = result.id;
    next();
})
.catch(function(error){
    console.log(error);
    next();
})
}

todo.delete = function(req,res,next){
    db.none("DELETE FROM todo WHERE id=$1", [req.params.id])
.then(function(){
    next();
})
.catch(function(error){
    console.log(error);
    next();
})
}


module.exports = todo;