var db = require('../db/dbconfig');

var todo = {};

// create a method that gets all the data from the "todo" table
todo.getAll = function (req, res, next) {
  db.manyOrNone("SELECT * FROM todo;")  // query the database
    .then(function (result) {   // return the data as a javascript object "result"
      res.locals.todo = result;  // save that javascript object to the response object in res.locals.todo
      next();  // move on to the next command
    })
    .catch(function(error){ // if there is an issue when getting all 
      console.log(error); // log the error
      next(); // move on to the next command
    })
}
todo.update= function(req,res){

    Connection.one('UPDATE todo SET subject=$1, content =$2) WHERE id=$3 RETURN ;')
    then(function(result){
console.log('update')
res.locals.todo_id= result.id;
next();

    })
    .catch(function(error){
        console.log(error)
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
        subject  :req.body.subject,
        content  :req.body.content
    }
console.log(req.body)

  db.one(`INSERT INTO todo(subject, content) VALUES(1$ ,2$) RETURNING id;`,[todoData.subject ,todoData.content])
    .then(function(result){
      res.locals.todo_id = result.id;
      next();
    }).catch(function(error){
      console.log(error);
      next();
    })
}


todo.delete=function(req,res,next){
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

module.exports = todo;