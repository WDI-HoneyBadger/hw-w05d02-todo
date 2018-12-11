// var express = require('express');
// var router = express.Router();
var db = require('../db/config');

var todoList = require('../controllers/toDoController');

var todoList = {};

todoList.getAll = function(req , res , next){
    db.manyOrNone("SELECT * FROM todoList;")
    .then(function (result){
        console.log(result);
        res.locals.todoList = result;
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}
todoList.find = function(req , res , next){
    var id = req.params.id ;
    db.oneOrNone("SELECT * FROM todoList WHERE id =$1;" , [id])
    .then(function(result){
        res.locals.todoList = result;
        next(); 
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}

todoList.create = function(req , res , next){
    var todoData = {
        subject: req.body.subject,
        content: req.body.content,
    }
    console.log(req.body)
    db.one(
        `INSERT INTO todoList (subject, content) VALUES ($1, $2) RETURNING id;`,
        [todoData.subject , todoData.content])
        .then(function(result){
            console.log(result)
            res.locals.todoList_id = result.id;
            next
            next();
        })
        .catch(function (error){
            console.log(error);
            next();
        })
}

todoList.update = function(req , res ,next){
    var todoData = {
        subject: req.body.subject,
        content: req.body.content,
    }
    db.one(`UPDATE todoList SET subject= $1 , content= $2 RETURNING id;` , [todoData])
}

todoList.delete = function(req, res, next){
    db.none('DELETE FROM todoList WHERE id=$1;' , [req.params.id])
    .then(function(){
        console.log('DELETED');
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}

module.exports = todoList;