var express = require('express');
var mustache = require('mustache-express');
var port = 3000;

var app = express();
var todoController = require('./controllers/todo_controller');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use('/static', express.static(__dirname + '/public'));

app.listen(port, function(){
    console.log('---------------------------------------');
    console.log('Express listening on localhost:' + port);
    console.log('---------------------------------------');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(methodOverride('_method'));

app.use('/todo',todoController);

app.use('/', function(req, res){
    res.render('./index');
});