var db = require('../db/dbconfig');

var toDoList = {};


toDoList.getAll = function(req, res, next){
    db.manyOrNone("SELECT * FROM todolist;")
    .then(function(result){
        //console.log(result);
        res.locals.toDoList = result;
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}

toDoList.find = function(req, res, next){
    var id = req.params.id;
    db.oneOrNone("SELECT * FROM todolist WHERE id = $1;", [id])
      .then(function(result){
        res.locals.toDoList = result;
        next();
      })
      .catch(function(error){
        console.log(error);
        next();
      })
  }

  toDoList.create = function(req, res, next){
      var todoData = {
        subject: req.body.subject,
        content: req.body.content,
      }
      console.log(req.body)
    db.one(`INSERT INTO todolist(subject, content) VALUES($1, $2) RETURNING id;`,
           [todoData.subject, todoData.content])
      .then(function(result){
        res.locals.todolist_id = result.id;
        next();
      }).catch(function(error){
        console.log(error);
        next();
      })
  }

toDoList.update = function(req, res ){
connection.one(`UPDATE todolist SET subject = $1, content = $2 WHERE id = $3 RETURN id;`)
.then(function(result){
    console.log('update')
    res.locals.todolist_id = result.id;
    next();
}) 
.catch(function(error){
    console.log(error);
    next();
})
}







  toDoList.delete = function(req, res, next){
    db.none('DELETE FROM todolist WHERE id=$1;', [req.params.id])
      .then(function(){
        console.log('successful delete');
        next();
      })
      .catch(function(error){
        console.log(error);
        next();
      })
  }

  
  module.exports = toDoList;