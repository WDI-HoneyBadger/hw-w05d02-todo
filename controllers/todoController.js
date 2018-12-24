var express = require('express');
var router = express.Router();

var todo = require('../models/todo');

router.get ('/', todo.getAll, renderIndex);
router.get('/new', renderNew); ////be mindfull of order 
router.get ('/:id', todo.getById, renderShow);

router.get('/:id/edit', todo.getById, renderEdit);




router.delete('/:id', todo.delete, redirectIndex);
router.post('/', todo.create, redirectShow);
router.put('/:id', todo.update, redirectShow);

function renderIndex(req, res){
    var mustacheVariables = {
        todo : res.locals.todo
    }
    res.render('./todos/index', mustacheVariables);
}

function redirectShow(req, res){
    res.redirect(`/todos/${res.locals.todo_id}`);
}


function renderShow(req, res){
    // var mustacheVariables = {
//     todo : res.locals.todo     why didnt this work in renderShow from my scafolding like renderIndex??
// }
    var mustacheVariables = res.locals.todo;
    res.render('./todos/show', mustacheVariables);
}



function redirectIndex(req, res){
    res.redirect('/todos')
}
function renderEdit(req, res){
    var mustacheVariables = res.locals.todo;
    res.render('./todos/edit', mustacheVariables);
}

function renderNew(req, res){
    res.render('./todos/new')
}

module.exports = router;