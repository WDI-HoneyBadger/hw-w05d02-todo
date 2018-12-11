var express = require('express');
var router = express.Router();

var todo = require('../models/todo');

router.get('/', todo.getAll, renderIndex)


function renderIndex(req,res){  
  var mustacheVariables = {
    todo: res.locals.todo
  }
  res.render('./todo/index', mustacheVariables);
}


function renderShow(req,res){
  var mustacheVariables = {
    
    todo: res.locals.todo
}
  res.render('./todo/show', mustacheVariables);
}



router.get('/:id', todo.find, renderShow);
   //router.get('/', todo.create, redirectShow);


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

  
  
  

function redirectShow(req, res){

  res.redirect(`/index/${res.local.todo_id}`);
}


// router.get('/' , function(){

// })

function renderEdit(res, req){

  var mustacheVariables = {
    todo: res.locals.todo
  }

  res.render('./todo/edit', mustacheVariables);
}


module.exports = router;