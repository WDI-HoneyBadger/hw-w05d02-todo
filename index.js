
//top-level config
var express = require('express');
var mustache = require('mustache-express');
var port = 3000;
// all are dependencies
//morgan is a logger - similar to what we built in the middleware 
var logger = require('morgan');
var bodyParser = require('body-parser');



//app config
var app = express();

//mustache set-up
app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use('/static', express.static(__dirname + '/public'));


app.use('/static', express.static(__dirname + '/public'));
//set-up morgan
app.use(logger('dev'));

// set-up body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.get('/', function (req,res){
    res.render('./index');
})

var todoController =require('./controllers/todoController');

// controller
app.use('/toDo', todoController);





//start the server!
app.listen(port, function () {
  console.log('---------------------------------------');
  console.log('Express listening on localhost:' + port);
  console.log('---------------------------------------');
});