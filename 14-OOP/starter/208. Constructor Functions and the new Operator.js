'use strict';

const Person = function (fName, bYear) {
  this.fName = fName;
  this.bYear = bYear;
};

const newOperator = new Person();
console.log(newOperator);
const jonas = new Person('Jonas', 1991);
const michie = new Person('Michie', 1999);
console.log(jonas);
console.log(michie);
const jay = 'Jay';

console.log(jay instanceof Person);
console.log(jonas instanceof Person);

///209. Prototypes
console.log('=====209. Prototypes=====');
console.log(Person.prototype);
Person.prototype.calAge = function () {
  console.log(2023 - this.bYear);
};
jonas.calAge();
console.log(jonas);
michie.calAge();
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype); //true
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(michie));
console.log(Person.prototype.isPrototypeOf(jay));

Person.prototype.spices = 'Some thing else....';
console.log(jonas.spices);
console.log(michie.spices);

//211. Prototypal Inheritance on Built-In Objects

console.log('=====211. Prototypal Inheritance on Built-In Objects=====');

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.dir(Person.prototype.constructor);
