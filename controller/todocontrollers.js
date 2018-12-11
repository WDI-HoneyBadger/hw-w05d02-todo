var express = require('express');
var router = express.Router();
var todo = require('../models/todo');

router.get('/', todo.getAll, renderIndex);

function renderIndex(req, res){
    var todoTable = {
        todoList: res.locals.alltodo
    };
    res.render('./todo/views', todoTable);
}


module.exports=router;