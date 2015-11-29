/**
 * Arrays & Objects
 */

function sum_all() {
  // arguments - array of all arguments
  //
  var sum = 0;
  for ( var i=0; i < arguments.length; i++ ) {
    sum += arguments[i];
  }

  return sum;
}

sum_all(1, 2, 5, 9);


function two(x, y) {
  return x + y;
}


function demo() {
  return Math.random() * 7;
}

var data = {
  email: 'ynon@ynonperek.com',
  name: 'ynon',
  stuff: 7,
  second_number: demo(),
  favorite_number: demo,
};

var keys = Object.keys(data);

console.log(data.name);
var key = 'email';
console.log(data[key]);


var arr = [2, 5, 'demo', { a: 1, b: 2 }, ['a', 'b']];
// arr.push, arr.pop, arr.shift, arr.unshift
// arr.splice
// arr[0], arr[1], arr[2]

for ( var i = 0; i < arr.length; i++ ) {
  console.log(arr[i]);
}

