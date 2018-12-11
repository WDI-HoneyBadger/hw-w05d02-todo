var express = require('express');
var mustache = require('mustache-express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var port = 3000;

var app = express();
var todoController = require('./conrollers/todoController');
app.engine('html', mustache());
app.set('view engine', 'html');

//app-level routing
app.set('views', __dirname + '/views');
app.use(methodOverride('_method'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use('/todo', todoController)

app.get('/', function(req,res){
    res.render('./index');
})
app.listen(port,function(){
    console.log('---------------------------------------');
    console.log('Express listening on localhost:' + port);
    console.log('---------------------------------------');

})