// ArrayBuffer stores bytes. here we are storing 8 bytes * 8 bits = 64bits.
var buffer = new ArrayBuffer(8);
var view = new Int32Array(buffer);
view[0] = 5;
view[1] = 15;
console.log(view);
