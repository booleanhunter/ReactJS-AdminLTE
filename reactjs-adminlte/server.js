var http = require("http");  //1
var url = require("url");  //2
var express = require("express");
var consolidate = require('consolidate');
var handlebars = require('handlebars');
var bodyParser = require('body-parser');

var routes = require('./routes');

var app = express();

app.set('views', 'views'); //Set the folder-name from where you serve the html page. ]
app.set('view engine', 'html');
app.engine('html', consolidate.handlebars);
app.use(express.static('./public')); //Set the folder from where you serve all static files like images, css, javascripts, libraries etc
app.use(bodyParser.urlencoded({ extended: true }));
var portNumber = 8080;

http.createServer(app).listen(portNumber, function(){
	console.log('Server listening at port '+ portNumber);
	routes.initialize(app);
});

/*


*/