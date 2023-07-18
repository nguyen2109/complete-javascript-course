'use strict';
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, move] of movements.entries()) {
//   move > 0
//     ? console.log(`STT : ${i + 1} + ${move} VND `)
//     : console.log(`STT : ${i + 1} - ${Math.abs(move)} VND `);
// }

// console.log(`----- FOREACH -----`);

movements.forEach(function (move, i, arr) {
  move > 0
    ? console.log(`STT : ${i + 1} + ${move} VND `)
    : console.log(`STT : ${i + 1} - ${Math.abs(move)} VND `);
});

// console.log(`----- FOREACH WITH MAP METHOD -----`);
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});

const a = new Set(['USD', 'EUR', 'GBP', 'USD']);

a.forEach(function (value, _, map) {
  console.log(`${value} : ${value}`);
});
