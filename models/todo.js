var connection = require('../db/dbconfig');

var todo = {};

todo.getemAll = function(req,res,next){
    connection.manyOrNone("SELECT * FROM todo_list;")
    .then(function(result){
        res.locals.todos = result;
        //console.log(res.locals.todos);
        next();
    })
}

todo.find = function (req, res, next) {
    var id = req.params.id;
    connection.oneOrNone("SELECT * FROM todo_list WHERE id = $1;", [id])
      .then(function(result){
        res.locals.todo = result;
        next();
      })
      .catch(function(error){
        console.log(error);
        next();
      })
  }

todo.create = function(req,res,next){
    var todoData = {
        todo_subject: req.body.todo_subject,
        todo_content: req.body.todo_content

    }
    console.log(req.body);
    connection.one(`INSERT INTO todo_list(todo_subject , todo_content) VALUES($1,$2) RETURNING id;`,[todoData.todo_subject , todoData.todo_content ,req.params.id])
    .then(function(result){
        res.locals.todo_id = result.id;
        next();
    })
    .catch(function(error){
        console.log(error);
    })

}

todo.update = function(req, res, next){
    var todoData = {
        todo_subject: req.body.todo_subject,
        todo_content: req.body.todo_content
    } 
    connection.one(`UPDATE todo_list SET todo_subject = $1, todo_content = $2 WHERE id = $3 RETURNING id;`, [todoData.todo_subject,todoData.todo_content,req.params.id])
      .then(function(result) {
        res.locals.todo_id = result.id;
        next();
      })
      .catch(function(error){
        console.log(error);
        next();
      })
  }

todo.delete = function(req,res,next){
    connection.none('DELETE FROM todo_list WHERE id=$1;',[req.params.id])
    .then(function(){
        console.log('successful delete');
        next();
      })
      .catch(function(error){
        console.log(error);
        next();
      })
}




    module.exports = todo;
