var express = require('express');
var router = express.Router();
var todo = require('../models/todo');


router.get('/', todo.getAll, renderIndex);
router.get('/new',renderNew);
router.get('/:id', todo.find ,renderShow);


// router.post
// router.delete
// router.put


function renderIndex(req, res){
    var todoVariables = {
        todo: res.locals.todo
    };
    res.render('./todo/index', todoVariables);
};

function renderShow(req,res){
    var todoVariables = {
        todo: res.locals.todo
    };
    res.render('./todo/index', todoVariables);

    // function renderNew(req, res){
    // }
    // function redirectShow(req,res){}
    // function redirectIndex(req,res){
        // function renderEdit(req,res){}
}
module.exports = router;