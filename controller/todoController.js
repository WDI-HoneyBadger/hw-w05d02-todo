var express = require('express');
var router = express.Router();

var todo = require('../models/../models/todo');

router.get('/', todo.getAll, renderIndex);
router.get('/new', renderNew);
router.get('/:id/edit', todo.find, renderEdite)
router.post('/', todo.create, redirectShow);
router.get('/:id', todo.find, renderShow);
router.put('/:id', todo.update, redirectShow);

router.delete('/:id', todo.delete, redirectindex);


function renderIndex(req, res){
    var todoVariables = {
        todoList: res.locals.todo
    }
    res.render('./todo/index', todoVariables);
};

function renderShow(req, res){
    var todoVariables = {
        todoList: res.locals.todo
    }
    res.render('./todo/show', todoVariables);
};

function renderNew(req, res){
    res.render('./todo/new');
};

function redirectShow(req, res){
    res.redirect(`/todo/${res.locals.todo_id}`);
};

function redirectindex(req, res){
    res.redirect('/todo');
};

function renderEdite(req, res){
    var todoVariables = {
        todoList: res.locals.todo
    };
    res.render('./todo/edit', todoVariables);
};

module.exports = router;