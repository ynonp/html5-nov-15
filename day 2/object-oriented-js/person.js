var PersonPrototype = {
  hello: function() {
    console.log('Hi! My name is: ' + this.name);
  }
};

function Person() {
  // special variable: this
  this.name = 'John Doe';
  this.likes = 'cats';
}

Person.prototype = PersonPrototype;

var p = new Person();
var q = new Person();


