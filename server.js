//adding express package
var express = require('express');
var middleware = require('./middleware.js');
// will turn express into a funcition 
var app = express();
var port = 3000;


// this is being moved to a different file. 
// var middleware = {
// 	requireAuthentication: function (req, res, next) {
// 		console.log('private route hit!');
// 		next();
// 	},
// 	logger: function (req, res, next) {
// 		console.log('Request: ' + new Date().toString() + req.method + ' ' + req.originalUrl);
// 		next();
// 	}
// };

// this will add middleware to all routes in app
// app.use(middleware.requireAuthentication);
// app.use(middleware.logger);

// adding the middleware call to the second part will call the route it is associated to
app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About US');
});

//takes 2 arguments (root doc, function (request , response) )
//by adding the folder we do not need to point main root to another area
// app.get('/', function (req, res) {
// 	res.send('hello express!');
// });

// app.get('/about', function (req, res) {
// 	res.send('About US');
// });


//print directory path in node
// console.log(__dirname);

//expose folder for web server 
app.use(express.static(__dirname + '/public'));

//have to tell it what port to listen on
//ading second function for to print out to console
app.listen(port, function (){
	console.log('express server started on port ' + port);
});

