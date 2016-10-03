// grabbing http from nodejs core
var http = require('http');

/*
This basic server listen on localhost port 1337 for requests and upon incoming req
returns a res object set with header and 'Hello World\n'
*/
http.createServer(function (req, res) {

  res.writeHead(200, {'Content-Type': 'text/plain'});

  // end method means this is the last thing that i am sending.
  res.end('Hello World\n');

}).listen(1337, '127.0.0.1');

// 127.0.0.1 always translates to localhost.
