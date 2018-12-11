//top-level config
const express = require('express');
const mustache = require('mustache-express');
var port = 3000;

var logger = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//app-level config
var app = express();
var todoController = require('./controllers/todo_controller');

app.engine('html', mustache());
app.set('view engine', 'html');

//app-level routing
app.set('views', __dirname + '/views');

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(methodOverride('_method'));

//routing homepage without controller
app.get("/", function(req, res){
  res.render('./home');
})

//route controllers
app.use('/todo', todoController);


//start app
app.listen(port, function(){
    console.log('---------------------------------------');
    console.log('Express listening on localhost:' + port);
    console.log('---------------------------------------');
});


