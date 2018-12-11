var express = require('express');
var router = express.Router();

var todo= require('../models/todo');

router.get('/', todo.getAll, renderIndex);
router.get('/new', renderNew);
router.post('/', todo.create, redirectShow);
router.get('/:id', todo.find, renderShow);
//router.post('/', todo.delete, redirectShow);


function renderIndex(req, res){
  mustacheVariables = {
    todo: res.locals.todo
  }
  console.log(mustacheVariables)
  res.render('./todos/index');
};

function renderShow(req,res){
  mustacheVariables = {
    todolist: res.locals.todo
  }
  console.log(mustacheVariables)
  res.render('./todos/index', mustacheVariables);
};

function renderNew(req, res){
  res.render('./todos/new');
}



function renderEdit(req, res){
    var todo = {
        todolist: res.locals.todo
    }
    res.render('./todos/edit', todo);
};

function redirectShow(req, res) {
  console.log(req.body);
  res.redirect(`/todos/${res.locals.todo_id}`);
}

function index(req, res) {

  res.redirect(`/todos`);
}

module.exports = router;