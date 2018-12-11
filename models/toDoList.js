var db = require('../db/config');
var list = {};

list.getAll = function (req,res,next){
    db.manyOrNone("SELECT * FROM list;")
    .then(function(result){
        res.locals.list=result;
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}

list.find = function(req,res,next){
    var id = req.params.id;
    db.oneOrNone("SELECT * FROM list WHERE id=$1 ;" , [id])
    .then(function(result){
        res.locals.list=result;
        console.log(result);
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}

list.create = function(req,res,next){
    var list = {
        name: req.body.name,
        explanation: req.body.explanation
    }

    db.one(`INSERT INTO list (name , explanation) VALUES ($1,$2) RETURNING id;`, [list.name,list.explanation, req.params.id])
    .then(function(result){
        res.locals.list_id=result.id;
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}

list.update = function (req,res,next){
    var list= {
        name: req.body.name,
        explanation: req.body.explanation
    }

    db.one(`UPDATE list SET name = $1 , explanation = $2  WHERE id = $3 RETURNING id;`,[list.name,list.explanation, req.params.id])
.then(function (result){
    res.locals.list_id=result.id;
    next();
})
.catch(function(error){
    console.log(error);
    next();
})
    
}


list.delete = function (req,res,next){
    db.none(`DELETE FROM list WHERE id=$1 `, [req.params.id])
    .then(function (){
        console.log('success delete');
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}
module.exports = list; 