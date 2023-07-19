'use strict';
class CarCL {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} accelerate : ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} brake : ${this.speed}  km/h`);
  }
  get speedUS() {
    return console.log(this.speed / 1.6);
  }
  set speedUS(speed) {
    return console.log((this.speed = speed * 1.6));
  }
}
const ford = new CarCL('Ford', 120);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.accelerate();
ford.speedUS;
ford.speedUS = 120;
