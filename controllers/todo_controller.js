var express = require('express');
var router = express.Router();

var todo = require('../models/todo');

router.get('/', todo.getAll, renderIndex);
router.get('/:id', todo.find, renderShow);
router.post('/', todo.create, redirectShow);
router.get('/new', renderNew);
router.delete('/:id', todo.delete, redirectIndex);
 
function renderIndex(req, res){
    var mustacheVariables = {
      todo: res.locals.todo
    }
    res.render('./todos/index', mustacheVariables);
  }

  function renderShow(req,res){
    var mustacheVariables = res.locals.todo;
    res.render('./todos/show', mustacheVariables);
  }

  function redirectShow(req, res) {
    console.log(req.body);
    res.redirect(`/todos/${res.locals.todo_id}`);
  }

  function renderNew(req, res){
    res.render('./todos/new');
  }


function redirectIndex(req, res){
    res.redirect('/todos');
  }
module.exports = router;