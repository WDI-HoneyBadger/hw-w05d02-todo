var express = require('express');
var router = express.Router();

var todoList = require('../models/todoList');

router.get('/', todoList.getAll, renderIndex);
router.get('/new', renderNew);
router.get('/:id/edit' ,todoList.find , renderEdit)
router.get('/:id', todoList.find, renderShow);

router.post('/', todoList.create, redirectShow);
router.delete('/:id', todoList.delete, redirectIndex)
router.put('/:id' , todoList.update, redirectShow)

function renderIndex(req, res){
    mustacheVariables = {
        todoList: res.locals.todoList
    }
    res.render('./todo/index', mustacheVariables);
  }

  function renderShow(req,res){
    mustacheVariables = res.locals.todoList;
    res.render('./todo/show', mustacheVariables);
  }
  
  function renderEdit(req ,res){
    var mustacheVariables =  res.locals.todoList;
    res.render('./todo/edit' , mustacheVariables);
  }
  
  function renderNew(req, res){
    res.render('./todo/new');
  }
  
  function redirectShow(req, res) {
    console.log(req.body);
    res.redirect(`/todo/${res.locals.todoList_id}`);
  }
  
  function redirectIndex(req, res){
    res.redirect('/todo');
  }
  
  module.exports = router;