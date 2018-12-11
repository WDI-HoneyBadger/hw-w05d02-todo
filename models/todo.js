var db = require('../db/config');
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
        var todoData = {
            task: req.body.task,
            kindofsupport: req.body.kindofsupport ,
            building:req.body.building
          
        }
        console.log(req.body)
        db.one(
          `INSERT INTO todo
          (task, kindofsupport , building)
          VALUES ($1, $2 ,$3) RETURNING id;`,
          [todoData.task, todoData.kindofsupport , todoData.building])
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

      todo.update = function(req, res, next){
        var todoData = {
            task: req.body.task,
            kindofsupport: req.body.kindofsupport,
            building:req.body.building
        }
        console.log(req.body)

        db.one("UPDATE todo SET task = $1, kindofsupport= $2  , building =$3 WHERE id = $4 RETURNING id;",
          [todoData.task, todoData.kindofsupport ,todoData.building, req.params.id ])
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

module.exports = todo;