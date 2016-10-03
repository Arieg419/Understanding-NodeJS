var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

    // MIME type is 'text/html'
    // If we would have written 'text/plain' browser will not try to parse html, will appear as text.
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var html = fs.readFileSync(__dirname + '/index.html', 'utf8');
    var message = 'Hello world...';
    html = html.replace('{Message}', message);
    res.end(html);

}).listen(1337, '127.0.0.1');

/*
What is the real reason that NodeJS cannot hot reload like client side stuff?
Remember NodeJS is interperted via the v8 engine. So our Node Code is translated
into machine code everytime we run a node program. Therefore even if we edit a file
we must restart the program so our code can be compiled once again.
*/
