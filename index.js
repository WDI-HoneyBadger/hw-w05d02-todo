var express = require('express');
var mustache = require('mustache-express');
var port = 3000;
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var todoController = require('./controllers/todo_controller');

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(methodOverride('_method'));

app.use('/todo', todoController);

app.get ('/', function(req,res){
    res.render('./index');
});

app.listen(port, function(){
    console.log('App is listening on port:' + port);
})