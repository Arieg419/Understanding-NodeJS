// pass by value
function change(b) {
	b = 2;
}

var a = 1;
// a is a primitive value, thus it is passed by val and not by ref
change(a);
console.log(a);

// pass by reference
function changeObj(d) {
	d.prop1 = function() {};
	d.prop2 = {};
}

var c = {};
c.prop1 = {};
changeObj(c);
console.log(c);
