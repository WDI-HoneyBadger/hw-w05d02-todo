var express = require('express');
var router = express.Router();

var todo = require('../models/todo');



router.get('/', todo.getAll, renderIndex);
router.get('/new', renderNew);
router.get('/:id', todo.find, renderShow);
router.get('/:id/edit', todo.find, renderEdit);

router.post('/', todo.create, redirectShow);
router.put('/:id', todo.update, redirectShow);
router.delete('/:id', todo.delete, redirectIndex);

function renderIndex(req, res){
    var mustacheVariables = {
        todos: res.locals.todo
    }
    res.render('./todo/index', mustacheVariables);
}

function renderShow(req, res){
    var mustacheVariables = res.locals.todo;
    res.render('./todo/show', mustacheVariables);
}

function renderNew(req, res){
   
    res.render('./todo/new');
}

function renderEdit(req, res){
    var mustacheVariables = res.locals.todo;
    res.render('./todo/edit', mustacheVariables);
}


function redirectIndex(req, res){
    res.redirect('/todo');
}

function redirectShow(req, res){
    res.redirect(`/todo/${res.locals.todoId}`);
}




module.exports = router;