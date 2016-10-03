var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

/*
Middleware -> Code that sits in between two layers of software. In the
case of Express sitting between the request and the repsonse.
*/

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	// Express provides next() to Middleware. It means run next Middleware.
	next();
});

app.get('/', function(req, res) {
	res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello world!</h1></body></html>');
});

app.get('/person/:id', function(req, res) {
	res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
});

app.get('/api', function(req, res) {
	res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);
