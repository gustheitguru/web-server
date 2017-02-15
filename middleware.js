



var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('private route hit!');
		next();
	},
	logger: function (req, res, next) {
		console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
};

//this will expose code for the rest of the app can use this file. 
module.exports = middleware;