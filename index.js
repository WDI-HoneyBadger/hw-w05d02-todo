var express = require('express');
var app = express();
var port = 3000;
var todocontroller = require('./controller/todocontrollers');

var mustache = require('mustache-express');
app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use('/todo',todocontroller);
app.use('/',function(req, res){
    res.render('./index');
})


app.listen(port, function(){
    console.log(` hello ${port}`)


});
