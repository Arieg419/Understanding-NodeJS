var express = require('express');
var app = express();

// HTTP verbs -> Get, Post, Put, Delete etc...

// Environment variables
var port = process.env.PORT || 3000;

// Responds to http get requests.
app.get('/', function(req, res) {
	// Express allows us to not specify content type. It does it for us.
	res.send('<html><head></head><body><h1>Hello world!</h1></body></html>');
});

// Responds to http get requests.
app.get('/api', function(req, res) {
	res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);
