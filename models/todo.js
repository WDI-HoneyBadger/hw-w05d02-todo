var db = require('../db/db');

var alltodo = {};

// create a method that gets all the data from the "pokemon" table
alltodo.getAll = function (req, res, next) {
  db.manyOrNone("SELECT * FROM dolist;")  // query the database
    .then(function (result) {   // return the data as a javascript object "result"
      res.locals.alltodo = result;  // save that javascript object to the response object in res.locals.pokemon
      next();  // move on to the next command
    })
    .catch(function(error){ // if there is an issue when getting all the pokemon
      console.log(error); // log the error
      next(); // move on to the next command
    })
}

module.exports = alltodo;