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
    res.send(res.locals.todo);
}

function redirectShow(req, res){
    res.redirect(`/todo/${res.locals.todo_id}`);
}


function renderShow(req, res){
var mustacheVariables; 


}

function redirectIndex(req, res){

}
function renderEdit(req, res){
    var mustacheVariables = res.locals.todo
}

function renderNew(req, res){
    var mustacheVariables = res.locals.todo
}

module.exports = router;