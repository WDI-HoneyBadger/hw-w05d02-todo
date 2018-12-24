var express = require('express');
var mustache = require('mustache-express');
var port = 3000;
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();
var todoController = require('./controllers/todoController');

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use('/static', express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(methodOverride('_method'));


app.get('/', function(req, res){
   // res.send('home');
   res.render('./index');
})

app.use("/todos", todoController);




app.listen(port, function () {
    console.log('Express listening on localhost:' + port);
    });
