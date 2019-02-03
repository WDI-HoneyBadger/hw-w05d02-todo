var db = require('../db/cofig');

var todo = {};

// create a method that gets all the data from the "pokemon" table
todo.getAll = function (req, res, next) {
  db.manyOrNone("SELECT * FROM todo;")  // query the database
    .then(function (result) { 
        console.log(result);  // return the data as a javascript object "result"
      res.locals.todo = result;  // save that javascript object to the response object in res.locals.pokemon
      next();  // move on to the next command
    })
    .catch(function(error){ // if there is an issue when getting all the pokemon
      console.log(error); // log the error
      next(); // move on to the next command
    })
}

todo.find = function(req, res, next){
    var id = req.params.id;
    db.oneOrNone("SELECT * FROM todo WHERE id=$1;", [id])
    .then(function(result){
        res.locals.todo = result;
        next();
    }).catch(function(error){
        console.log(error);
        next();
    })
}

todo.create = function(req, res, next){
    db.one("INSERT INTO todo(name, definition) VALUES($1, $2) RETURNING id;", [req.body.name, req.body.definition])
    .then(function(result){
        res.locals.todo_id = result.id;
        next();
    }).catch(function(error){
        console.log(error);
        next();
    })
};

todo.delete = function(req, res, next){
    db.none("DELETE FROM todo WHERE id=$1;", [req.params.id])
    .then(function(){
        console.log("successful delete")
        next();
    }).catch(function(error){
        console.log(error);
    });
};

todo.update = function(req, res, next){
    db.one("UPDATE todo SET subject=$1, content=$2 WHERE id=$3 RETURNING id;", [req.body.subject, req.body.content, req.params.id])
    .then(function(result){
        console.log('seccessful update')
        res.locals.todo_id = result.id;
        next();
    }).catch(function(error){
        console.log(error);
    });
};





module.exports = todo;
