'use strict';

const Person = {
  calAge() {
    console.log(2023 - this.Byear);
  },
};
const steven = Object.create(Person);
console.log(steven);
steven.name = 'Steven';
steven.Byear = 1999;
steven.calAge();
console.log(steven.__proto__ === Person);
