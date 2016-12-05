//adding express package
var express = require('express');
// will turn express into a funcition 
var app = express();
var port = 3000;

//takes 2 arguments (root doc, function (request , response) )
//by adding the folder we do not need to point main root to another area
// app.get('/', function (req, res) {
// 	res.send('hello express!');
// });

app.get('/about', function (req, res) {
	res.send('About US');
});

//print directory path in node
// console.log(__dirname);

//expose folder for web server 
app.use(express.static(__dirname + '/public'));

//have to tell it what port to listen on
//ading second function for to print out to console
app.listen(port, function (){
	console.log('express server started on port ' + port);
});

