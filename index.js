//top-level config
var express = require('express');
var mustache = require('mustache-express');
var port = 3000;
var bodyParser = require('body-parser');

var todoController = require('./controllers/todoController');

//app-level config
var app = express();



app.engine('html', mustache());
app.set('view engine', 'html');


// method override config 
var methodOverride = require('method-override');
app.use(methodOverride('_method'));


/* setting up body parser */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//app-level routing
app.set('views', __dirname + '/views');

app.use('/todo', todoController);
app.use('/', function(req, res){
    res.render('./index');
})


//start app
app.listen(port, function(){
    console.log('---------------------------------------');
    console.log('Express listening on localhost:' + port);
    console.log('---------------------------------------');
});