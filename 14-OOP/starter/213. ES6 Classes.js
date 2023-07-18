'use strict';

class Person {
  constructor(name, bYear) {
    this.name = name;
    this.bYear = bYear;
  }
  calAge() {
    console.log(2023 - this.bYear);
  }
}

const jonas = new Person('Jonas', 1992);
console.log(jonas);
jonas.calAge();
