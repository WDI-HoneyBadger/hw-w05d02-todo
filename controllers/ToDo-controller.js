var express = require('express');
var router = express.Router();

var todo = require('../models/todo');

router.get('/', todo.getAll, renderIndex);
router.get('/new', renderNew);
router.get('/:id', todo.find, renderShow);
router.post('/', todo.create, redirectShow);
router.delete('/:id', todo.delete, redirectIndex);
router.put('/:id', todo.update, redirectShow);
router.get('/:id/edit', todo.find, renderEdit);



function renderIndex(req, res){
   var mustacheVariables = {
        todo: res.locals.todo
    }
    console.log(mustacheVariables)
    res.render('./ToDolist/index', mustacheVariables);
}


function renderNew(req, res){
    res.render('./ToDolist/new');
  }

function renderShow(req, res){
    var mustacheVariables = {
        todo: res.locals.todo
    }
    res.render('./ToDolist/show', mustacheVariables);
}

function redirectShow(req, res){
    console.log(req.body);
    res.redirect(`/ToDolist/${res.locals.todolist_id}`);
}

function renderEdit(req,res){
    var mustacheVariables = {
        todo: res.locals.todo
    }
    res.render('./ToDolist/edit', mustacheVariables);
  }


function redirectIndex(req, res){
    res.redirect('/ToDolist/index');
}

module.exports = router;
