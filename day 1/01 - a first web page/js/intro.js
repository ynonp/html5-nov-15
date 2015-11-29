// Line comment in JS is 
/*
* Multi line comment
*/

// Running JS
// 1. Command line (using node)
// 2. Browser - from HTML file

/**
 * 1. Variables
 * 2. Functions
 * 3. If
 * 4. Loops (for, while)
 * 5. Data Types: numbers, strings, arrays, hash, date
 * 6. Exceptions
 *
 * 7. DOM
 * 8. Classes / Modules
 */

console.log('Hello World');

var name = 'ynon';
var stuff = 7;
var email = "ynon@ynonperek.com";
stuff = 'seven';

function add(x, y) {
  return Number(x) + Number(y);
}

if ( 2 < 5 ) {
  console.log('2 < 5');
}
else if ( 2 < 7 ) {
  console.log('not printed');
}
else {
  console.log('really???');
}

for ( var i=0; i < 10; i++ ) {
  console.log('i = ' + i);
}

/**
 * Variable Scope
 */

function demo() {
  var x = 10;
  return x * x;
}


console.log('Hello ' + name);

