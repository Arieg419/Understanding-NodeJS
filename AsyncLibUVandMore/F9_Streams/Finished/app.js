var fs = require('fs');

// default buffer is 64kb. We can specify our buffer length via highWaterMark. here 32KB.
var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 });

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

readable.on('data', function(chunk) {
	console.log('chunk len is: ' + chunk.length);
	console.log(chunk);
	writable.write(chunk);
});
