'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposit = movements.filter((params) => params > 0);

const withdrawal = movements.filter((params) => params < 0);
console.log(deposit);
console.log(withdrawal);
