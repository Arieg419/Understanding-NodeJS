function Person(firstname, lastname) {

	this.firstname = firstname;
	this.lastname = lastname;

}

Person.prototype.greet = function() {
	console.log('Hello, ' + this.firstname + ' ' + this.lastname);
};

// B/c using "new" keyword, Person function will return new object.
// "this" inside Person constructor will point to new empty object
// to be returned. Notice that it will not be empty, b/c I am using
// this.firstname / lastname to set properties.
var john = new Person('John', 'Doe');
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);
