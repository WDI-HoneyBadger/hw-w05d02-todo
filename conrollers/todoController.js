var express = require('express');
var router = express.Router();

var todo = require('../models/todo');


router.get('/', todo.getemAll,renderIndex); 
router.get('/new',renderNew);
router.get('/:id',todo.find,renderShow);
router.get('/:id/edit',todo.find,renderEdit);

router.post('/', todo.create, redirectShow);
router.delete('/:id', todo.delete, redirectIndex);
router.put('/:id', todo.update, redirectShow);


function renderShow(req,res){
    mustacheVariables = res.locals.todo;
//console.log(mustacheVariables);
    res.render('./todos/show',mustacheVariables);
}

function renderIndex(req, res){
    // console.log('****',res.locals.todos)
    var mustacheVariables = {
      todos: res.locals.todos
    }
    res.render('./todos/index', mustacheVariables);
  }

  function renderNew(req,res){
      res.render('./todos/new');
  }

  function redirectShow(req,res){
    res.redirect(`/todo/${res.locals.todo_id}`);
  }

  function redirectIndex(req,res){
    res.redirect('/todo');
  }

  function renderEdit(req,res){
    var mustacheVariables = res.locals.todo;
    res.render('./todos/edit',mustacheVariables);
  }
 

module.exports = router;