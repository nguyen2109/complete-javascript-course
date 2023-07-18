'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;
console.log('----- MAP METHOD -----');
const movementToUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});
console.log(movementToUSD);

console.log('----- FOR OF METHOD -----');
const movementToUSD2 = [];
for (const mov of movements) {
  movementToUSD2.push(mov * eurToUsd);
}
console.log(movementToUSD2);

console.log('----- MAP METHOD WITH ARROW FUNCTION -----');
const movUSD = movements.map((mov) => mov * eurToUsd);
console.log(movUSD);

const movementsDes = movements.map(function (el, i, arr) {
  if (el > 0) {
    return `STT ${i + 1} : + ${el} `;
  } else {
    return `STT ${i + 1} : - ${el} `;
  }
});
console.log(movementsDes);
