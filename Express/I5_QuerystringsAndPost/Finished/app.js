var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});

app.get('/', function(req, res) {
	res.render('index');
});

// req.query => Query Strings are in the header of the url. ie. fb.com?omer&goldberg&id=1
// req.params => params are in header in url such as www.fb.com/person:23. 23 is param here.
app.get('/person/:id', function(req, res) {
	res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
});

// urlencodedParser is Middleware to be used before anonymous callback here.
app.post('/person', urlencodedParser, function(req, res) {
	res.send('Thank you!');
	console.log(req.body.firstname);
	console.log(req.body.lastname);
	console.log("Checking all req body");
	console.log(req.body);
});

// jsonParser is Middleware here to be run before anonymous cb.
app.post('/personjson', jsonParser, function(req, res) {
	res.send('Thank you for the JSON data!');
	console.log(req.body.firstname);
	console.log(req.body.lastname);
});

app.get('/api', function(req, res) {
	res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);
