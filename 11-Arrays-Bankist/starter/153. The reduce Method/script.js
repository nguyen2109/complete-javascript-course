'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = movements.reduce((acc, el) => acc + el, 0);

// let balance2 = 0;
// for (const mov of movements) {
//   balance2 += mov;
// }
// console.log(balance);
// console.log(balance2);

// function printBalance(params) {
//   const balance = params.reduce((acc, el) => acc + el, 0);
//   return balance;
// }
// console.log(printBalance(movements));

//SỬ dụng reduce để tìm ra số lớn nhất trong mảng
const max = movements.reduce(function (acc, el, i) {
  if (acc > el) {
    console.log(`${i}  ACC > EL : ${acc} > ${el}`);
    return acc;
  } else {
    console.log(`${i}  EL > ACC : ${el}  > ${acc} `);
    return el;
  }
}, movements[0]);
console.log(max);
