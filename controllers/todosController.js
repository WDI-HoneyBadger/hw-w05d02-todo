var express = require('express');
var router = express.Router();

var todo = require('../models/todo');


router.get('/', todo.getAll, renderIndex);
router.get('/new', renderNew);

router.get('/:id/edit', todo.find, renderEdit);
router.get('/:id', todo.find, renderShow);
router.post('/', todo.create , redirectShow);
router.delete('/:id', todo.delete , redirectIndex);
router.put('/:id', todo.update , redirectShow);




function renderIndex(req, res){
  mustacheVariables = {
    todo: res.locals.todo
  }
  // console.log(mustacheVariables)
  res.render('./todos/index', mustacheVariables);
}

function renderShow(req, res){
  var mustacheVariables = res.locals.todo;
  res.render('./todos/show', mustacheVariables);
  
}

function renderEdit(req,res){
  var mustachVariables = res.locals.term;
  res.render('./todos/edit', mustachVariables)
}

function renderNew(req,res){
  res.render('./todos/new')
}

function redirectShow(req,res){
  // console.log(req.body);
  res.redirect(`/todos/${res.locals.todo_id}`)
}

function redirectIndex(req,res){
  res.redirect('/todos');
}


module.exports = router;