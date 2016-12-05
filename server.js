//adding express package
var express = require('express');
// will turn express into a funcition 
var app = express();

//takes 2 arguments (root doc, function (request , response) )
app.get('/', function (req, res) {
	res.send('hello express!');
});

app.get('/about', function (req, res) {
	res.send('About US');
});

//have to tell it what port to listen on
app.listen(3000);

