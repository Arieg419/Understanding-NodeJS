/*
  1) require is function that you pass a 'path' to.
  2) module.exports is what the require function returns.
  This works b/c our code is actually wrapped in a function
  that is given these things as function parameters.
*/

var greet = require('./greet');
greet();
