var express = require('express');
var router = express.Router();

var todo = require('../models/todo')

router.get('/', todo.getAll, renderIndex);
router.get('/new', renderNew);
router.get('/:id/edit', todo.find, renderEdit);
router.get('/:id', todo.find, renderShow);
router.post('/', todo.create, redirectShow);
router.delete('/:id', todo.delete, redirectIndex)
router.put('/:id', todo.update, redirectShow)





function renderIndex(req, res) {
    var mustachevariables = {
        todo: res.locals.todo
    }
    console.log(mustachevariables)
    res.render('./todo/index', mustachevariables)

}

function renderNew(req, res) {
    res.render('./todo/new')
}

function renderShow(req, res) {
    var mustachevariables = res.locals.todo;
    
    res.render('./todo/show', mustachevariables);

}
function redirectIndex(req, res) {
    res.redirect('./todo/index')
}

function redirectShow(req, res) {
    console.log(req.body);
    res.redirect(`/todo/${res.locals.todo_id}`);
  }

function renderEdit(req, res) {
    var mustachevariables = {
        todo: res.locals.todo
    }
    res.render('./todo/edit', mustachevariables);

}

module.exports = router;
