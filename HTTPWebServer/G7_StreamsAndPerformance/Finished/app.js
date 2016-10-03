var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    /*
    Previous chapter I used a sync method. When building an app with
    many clients connecting simultaneously this can severly hurt app
    responsiveness. Thus we can opt to send data via chunk to buffer,
    sending what we recieve repetetively, until we have sent all data.
    */
    fs.createReadStream(__dirname + '/index.htm').pipe(res);

}).listen(1337, '127.0.0.1');
