var EventEmitter = require('events');
var util = require('util');

function Greetr() {
	this.greeting = 'Hello world!';
}

// any instance of Greetr will inherit from EventEmitter as well.
util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data) {
	console.log(this.greeting + ': ' + data);
	this.emit('greet', data); // has 'emit' from EventEmitter prototype.
}

var greeter1 = new Greetr();

// has 'on' method from EventEmitter prototype.
greeter1.on('greet', function(data) {
	console.log('Someone greeted!: ' + data);
});

greeter1.greet('Tony');
