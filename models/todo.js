var connection = require('../db/dbconfig');

var todo = {};

todo.getAll = function (req, res, next) {
  connection.manyOrNone('SELECT * FROM todo;')  
    .then(function (result) { 
      res.locals.todo = result;
      next(); 
    })
    .catch(function(error){ 
      console.log(error);
      next();
    })
}

todo.find = function (req, res, next) {
  connection.oneOrNone('SELECT * FROM todo WHERE id= $1;', [req.params.id])
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
  connection.one(`INSERT INTO todo (tasks, description, due_time) VALUES($1, $2, $3) RETURNING id;`,
         [req.body.tasks, req.body.description, req.body.due_time])
    .then(function(result){
      res.locals.todo_id = result.id;
      next();
    }).catch(function(error){
      console.log(error);
      next();
    })
}
todo.update = function(req, res, next){
  connection.one(`UPDATE todo SET task= $1, description= $2, due_time= $3 WHERE id=$4 RETURNING id;`,
  [req.body.tasks, req.body.description, req.body.due_time, req.params.id])
  .then(function(result){
    res.locals.todo_id = result.id;
    next();
  })
  .catch(function(err){
    console.log(err);
    next();
  })
}

todo.delete = function(req, res, next){
  connection.none('DELETE FROM todo WHERE id=$1;', [req.params.id])
  .then(function(){
    console.log('succesful delete')
    next();
  })
  .catch(function(error){
    console.log(error);
    next();
  })
}

module.exports = todo;