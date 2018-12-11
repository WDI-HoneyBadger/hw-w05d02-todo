var express = require('express');
var router = express.Router();

var list = require('../models/toDoList');

router.get('/', list.getAll, renderIndex);
router.get('/new', renderNew);

router.get('/:id/edit', list.find, renderEdit);
router.get('/:id', list.find , renderShow);
router.post('/',list.create, redirectShow);
router.delete('/:id', list.delete , redirectIndex);
router.put('/:id', list.update , redirectShow)


function renderIndex(req, res){
    var mustacheVariables = {
        list: res.locals.list
    }
    res.render('./todo/index', mustacheVariables)
}


function renderShow(req,res){
    var mustachVariables = res.locals.list;
    res.render('./todo/show', mustachVariables)
}

function renderEdit(req,res){
    var mustachVariables = res.locals.list;
    res.render('./todo/edit', mustachVariables)
}

function renderNew(req, res){
    res.render('./todo/new');
}

function redirectShow(req,res){
    res.redirect(`/todo/${res.locals.list_id}`);
}

function redirectIndex(req,res){
    res.redirect('/todo');
}

module.exports = router; 