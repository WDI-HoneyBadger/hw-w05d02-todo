var db = require('../db/dbconfig');
var todo = {};

todo.getAll = function (req, res, next) {
    db.manyOrNone("SELECT * FROM todo;")  // query the database
      .then(function (result) {   // return the data as a javascript object "result"
        res.locals.todo = result;  // save that javascript object to the response object in res.locals.pokemon
        next();  // move on to the next command
      })
      .catch(function(error){ // if there is an issue when getting all the pokemon
        console.log(error); // log the error
        next(); // move on to the next command
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
    var todoData ={
        subject:req.body.subject,
        content: req.body.content,

    }
    console.log(req.body)
  db.one(
    `INSERT INTO todo (subject,content) VALUES ($1, $2) RETURNING id;`,
    [todoData.subject, todoData.content,req.params.id])
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
 todo.update = function (req,res,next){
    var todoData = {
        subject:req.body.subject,
        content: req.body.content,
    }
     db.one(`UPDATE todo SET name = $1 , content = $2  WHERE id = $3 RETURNING id;`,
     [todoData.subject, todoData.content,req.params.id])
.then(function (result){
    res.locals.todo_id=result.id;
    next();
})
.catch(function(error){
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


