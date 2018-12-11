var express = require('express');
var router = express.Router();
var todo = require('../models/todo');

router.get('/', todo.getAll, renderIndex);
router.get('/new', renderNew);
router.get('/:id/edit', todo.find, renderEdit);
router.get('/:id', todo.find, renderShow);
router.post('/', todo.create, redirectToShow);
router.delete('/:id', todo.delete, redirectIndex);
router.put('/:id', todo.update, redirectToShow);

function renderIndex(req, res){
    mustacheVar = {
        todoList : res.locals.todoList
    }
    res.render('./todo/index', mustacheVar);
}

function renderShow(req, res){
    res.render('./todo/show', res.locals.todo)
}

function renderNew(req, res){
    res.render('./todo/new');
}

function renderEdit(req,res){
    res.render('./todo/edit', res.locals.todo);
}

function redirectToShow(req, res){
    res.redirect(`/todo/${res.locals.todo_id}`)
}

function redirectIndex(req, res){
    res.redirect('/todo');
}

module.exports = router;