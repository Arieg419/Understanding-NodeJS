// wraps up C++ code from v8 engine, let's me deal directly with files. fs == file system
var fs = require('fs');

// In Node.js, __dirname is always the directory in which the currently executing script resides
// http://stackoverflow.com/questions/8131344/what-is-the-difference-between-dirname-and-in-node-js
// encoding is not necessary here, b/c utf-8 is default.
/*
Really important -> node naming convention makes it clear that this method is Synchronous,
hence Sync.
*/
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);

/*
Async method for reading data from file on hard drive. Notice callback.
*/
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
	console.log(data);
});

console.log('Done!');
