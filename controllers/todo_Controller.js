var express = require('express');
var router = express.Router();

var todo = require('../models/todo');



router.get('/', todo.getAll, renderIndex);
router.get('/:id', todo.find, renderShow); // for the id - show page 
router.post('/', todo.create, redirectShow);
router.get('/new', renderNew);


function renderIndex(req, res){
    var mustacheVariables = {
      todo: res.locals.todo
    }
    res.render('./todo/index', mustacheVariables);
  }

  function renderShow(req,res){
    var mustacheVariables = res.locals.todo;
    res.render('./todo/show', mustacheVariables);
  }
  
  function renderNew(req, res){
    res.render('./todo/new');
  }
 
  function redirectShow(req, res) {
    console.log(req.body);
    res.redirect(`/todo/${res.locals.todo_id}`);
  }
  
module.exports = router;