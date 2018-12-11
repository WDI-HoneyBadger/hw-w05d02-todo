var db = require('../db/dbconfig');

var todo = {};

todo.getAll = function (req, res, next) {
    db.manyOrNone("SELECT * FROM todo;")  
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
    var id = req.params.id;
    db.oneOrNone("SELECT * FROM todo WHERE id = $1;", [id])
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
    var todoList = {
      subject: req.body.subject,
     content: req.body.content,
    }
    console.log(req.body)
    db.one(
      `INSERT INTO todo
      (subject, content) 
      VALUES ($1, $2) RETURNING id;`,
      [todoList.subject, todoList.content])
      .then(function (result) {
        console.log(result)
        res.locals.todo_id = result.id;
        next();
      })
      .catch(function (error) {
        console.log(error);
        next();
      })
  }



todo.delete = function(req, res, next){
    db.none('DELETE FROM todo WHERE id=$1;', [req.params.id])
      .then(function(){
        console.log('successful delete');
        next();
      })
      .catch(function(error){
        console.log(error);
        next();
      })
  }



  module.exports = todo;