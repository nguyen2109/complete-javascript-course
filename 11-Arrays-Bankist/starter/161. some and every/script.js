'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements.includes(-400));

const anyDeposit = movements.some((el) => el > 0);
console.log(anyDeposit);
