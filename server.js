const http = require('http');  // 1
const url = require('url');  // 2
const express = require('express');
const consolidate = require('consolidate');
const handlebars = require('handlebars');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();

app.set('views', 'views'); // Set the folder-name from where you serve the html page. ]
app.set('view engine', 'html');
app.engine('html', consolidate.handlebars);
app.use(express.static('./public'));
// Set the folder from where you serve all static files like images, css, javascripts, libraries etc
app.use(bodyParser.urlencoded({ extended: true }));
const portNumber = 8000;

http.createServer(app).listen(portNumber, () => {
  console.log('Server listening at port ' + portNumber);
  routes.initialize(app);
});

// var webpack = require('webpack');
// var WebpackDevServer = require('webpack-dev-server');
// var config = require('./webpack.config');

// new WebpackDevServer(webpack(config), {
// 	publicPath: config.output.publicPath,
// 	hot: true,
// 	historyApiFallback: true
// }).listen(3000, 'localhost', function (err, result) {
// 	if (err) {
// 		console.log(err);
// 	}

//   	console.log('Listening at localhost:3000');
// });

/*


*/
