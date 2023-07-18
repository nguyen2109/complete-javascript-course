'use strict';
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const BMW = new Car('BMW', 120);
const Mercedes = new Car('Mercedes', 95);

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} accelerate : ${this.speed} km/h`);
};
BMW.accelerate();
Mercedes.accelerate();

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} brake : ${this.speed}  km/h`);
};
BMW.brake();
Mercedes.brake();
