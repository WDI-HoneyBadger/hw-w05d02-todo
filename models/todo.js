var db = require('../db/dbconfig')
var todo = {};

todo.getAll = function (req, res, next) {
    
    db.manyOrNone("SELECT * FROM todo;")
        .then(function (result) {
            console.log(result)

            res.locals.todo = result;
            next();

        })
        .catch(function (error) {
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
        day: req.body.day,
        subject: req.body.subject,
        content: req.body.content
    }
    console.log(req.body)
    db.one(
      `INSERT INTO todo
      (day,subject, content) 
      VALUES ($1, $2, $3) RETURNING id;`,
      [todoData.day, todoData.subject, todoData.content])
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



  todo.update= function(req, res ){
    var todoData = {
        day: req.body.day,
        subject: req.body.subject,
        content: req.body.content
    }
    db.one(`UPDATE todo SET day=$1, subject=$2, content=$3 WHERE id=$4 RETURNING id;`,[todoData.day, todoData.subject, todoData.content])
    connection.one(`UPDATE todo SET day=$1, subject=$2, content=$3 WHERE id=$4 RETURN;`)
    .then(function(result){
        console.log('update')
        res.locals.todo_id = result.id;
        next();
    }) .catch(function(error){
        console.log(error)
    })
  }

todo.delete = function(req, res){
    db.none('DELETE FROM todo WHERE id=$1;',[req.params.id])
    .then(function(){
      next();
    })
    .catch(function(error){
      console.log(error)
      next()
    })
  }
  module.exports = todo;
