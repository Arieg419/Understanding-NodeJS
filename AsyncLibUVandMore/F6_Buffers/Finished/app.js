// Buffer is part of the nodejs core library.
// initial write, determines buffer size. here buffer will be of len 5.
var buf = new Buffer('Hello', 'utf8'); // utf8 is default so i didnt really need to speicfy that.
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);

buf.write('wo');
console.log(buf.toString());
