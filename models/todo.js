var db = require('../db/config');

var todo = {};

// create a method that gets all the data from the "pokemon" table
todo.getAll = function (req, res, next) {
  db.manyOrNone("SELECT * FROM todo_table;")  // query the database
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
  db.oneOrNone("SELECT * FROM todo_table WHERE id = $1;", [id])
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
    subject: req.body.subject,
    content: req.body.content
  }
  console.log(req.body)
  db.one(
    `INSERT INTO todo_table
    (subject, content) 
    VALUES ($1, $2) RETURNING id;`,
    [todoData.subjet, todoData.content])
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