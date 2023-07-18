'use strict';

// function greet(a) {
//   return function (name) {
//     console.log(`${a} và ${name}`);
//   };
// }

const greet = (a) => (name) => {
  console.log(`${a} và ${name}`);
};

const greetFunction = greet('Nội dung A');
greetFunction('Nội dung Name');

greet('Nội dung A2')('Nội dung B2');
