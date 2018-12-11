

var express = require('express');
var router = express.Router();

var toDo = require('../models/toDo');


//get routs

router.get('/', todo.getAll ,renderIndex) //home
router.get('/todo/:id',)
router.get('/todo',)
router.post('/new',todo.create, redirectNew )
router.get('/edit',)
router.put('/:id',)
router.delete('/:id',todo.delete, redirectIndex)



function renderIndex(req,res){
var mustacheVariables ={
    todo : res.locals.todo,
}
res.render('/todo/index', mustacheVariables)
}


function redirectNew (req,res){
   
    res.render('/todo/next')
}

function redirectIndex (req,res){
    var mustacheVariables ={
        todo : res.locals.todo,
    }
}





function redirectNew(req,res){
    res.redirect('/index')
}

module.exports = router;














