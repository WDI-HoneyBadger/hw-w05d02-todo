var express = require('express');
var mustache = require('mustache-express');
var port = 3000;
var bodyParser = require('body-parser');
var methodOverRide = require('method-override');

var app = express();
var todoController = require('./controllers/todoController');

app.listen(port, function(){
    Console.log(port);
});

//app.use homepage 

//app.use todoo





