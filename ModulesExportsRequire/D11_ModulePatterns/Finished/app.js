var greet = require('./greet1');
greet();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Changed hello world!';

// require caches the result of require for any given filename
// this is why greet3b.greet() will print 'Changed hello world'
var greet3b = require('./greet3');
greet3b.greet();


// will not be affected by caching, b/c I am creating objects
// in my code. in this instance require only returns the constructor
// not an object itself like in greet3
var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();

var greet5 = require('./greet5').greet;
greet5();
