var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

    res.writeHead(200, { 'Content-Type': 'application/json' });
    var obj = {
        firstname: 'John',
        lastname: 'Doe'
    };
    // take an obj and turn to string formatted as JSON.
    res.end(JSON.stringify(obj));

}).listen(1337, '127.0.0.1');


/*
Serialize -> Translating an object into a format that can be transferred or stored.
JSON, CSV, XML are popular. Deserialize is the opposite. (Converting the format)
back into an object.
*/
