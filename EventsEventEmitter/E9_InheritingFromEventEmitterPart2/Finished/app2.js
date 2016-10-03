var util = require('util');

function Person() {
	this.firstname = 'John';
	this.lastname = 'Doe';
}

Person.prototype.greet = function() {
	console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

function Policeman() {
	Person.call(this);
	this.badgenumber = '1234';
}

/*
without Person.call(this) call in Policeman constructor
util inherits only connects what's on the prototypes. thus, the
officer.greet call well return undefined for firstname and lastname.

with Person.call(this) call in Policeman constructor -> works fine.
now we will have the benefit of running the Policeman constructor via
Person.call(this), and also have Policeman share Person prototype.

Officer.__proto__.__proto__ is has Person.prototype.greet after util.inherit runs.
*/
util.inherits(Policeman, Person);
var officer = new Policeman();
officer.greet();
