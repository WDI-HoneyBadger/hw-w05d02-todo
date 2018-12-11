var express = require('express');
var router = express.Router();

var todo = require('../models/ToDo');

router.get('/', todo.getAll, renderIndex);
router.get('/new', renderNew);
router.get('/:id', todo.find, renderShow);
router.get('/:id/edit', todo.find, renderEdit);
router.post('/', todo.create, redirectShow);
router.delete('/:id', todo.delete, renderShow);
router.put('/:id', todo.update, renderShow);



function renderIndex(req, res){
  mustacheVariables = {
    todo: res.locals.todo
  }
  console.log(mustacheVariables)
  res.render('./todo/index', mustacheVariables);
}

function renderShow(req,res){
  mustacheVariables = res.locals.todo;
  res.render('./todo/show', mustacheVariables);
}

function renderNew(req, res){
  res.render('./todo/new');
}
function redirectShow(req, res) {
  console.log(req.body);
  res.redirect(`/todo/${res.locals.todo_id}`);
}

function renderEdit(req, res){
    mustacheVariables = {
      todo: res.locals.todo
    }
    console.log(mustacheVariables)
    res.render('./todo/edit', mustacheVariables);
  }


module.exports = router;