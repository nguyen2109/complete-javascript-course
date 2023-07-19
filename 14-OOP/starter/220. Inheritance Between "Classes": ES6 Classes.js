'use strict';

class PersonCL {
  constructor(fullName, BYear) {
    this.fullName = fullName;
    this.BYear = BYear;
  }
  calAge() {
    return console.log(2023 - this.BYear);
  }
  static hey() {
    console.log(`Hi`);
  }
}

///////////
class Student extends PersonCL {}
const david = new Student('David', 1999);
console.log(david);
david.calAge();
