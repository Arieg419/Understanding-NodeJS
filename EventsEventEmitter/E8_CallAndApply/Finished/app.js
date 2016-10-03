var obj = {
	name: 'John Doe',
	greet: function() {
		console.log(`Hello ${ this.name }`);
	}
}

obj.greet();

/*
{ name: 'Jane Doe' } will now become the 'this' ref in greet.
*/
obj.greet.call({ name: 'Jane Doe'});

/*
if 'greet' method took params, we could pass them in array with
apply method. not the case here...
*/
obj.greet.apply({ name: 'Jane Doe'});
