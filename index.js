var express = require('express');
var mustache = require('mustache-express');
var port = 3000;
var bodyParser = require('body-parser');
var todoController = require('./controllers/todoController');
var methodOverride = require('method-override');
var app = express();
ar todoController = require('./controllers/todo_controller');




// mustache set up
app.engine('html', mustache());
app.set('view engine', 'html');




app.use(methodOverride('_method'));

//  body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.set('views', __dirname + '/views');

app.use('/static', express.static(__dirname + '/public'));

app.use('/todo', todoController);
app.use('/', function (req, res) {
    res.render('./index');
})



// start the server!
app.listen(port, function () {
    console.log('---------------------------------------');
    console.log('Express listening on localhost:' + port);
    console.log('---------------------------------------');
});