'use strict';

const arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE
// console.log(arr.slice(1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice(-3));
// console.log(arr.slice(3, 4));

//SPLICE
// console.log(arr.splice(2));
// console.log(arr);

//REVERSE
// console.log(arr.reverse());

//CONCAT
const arr2 = ['f', 'g', 'h', 'j'];
const letter = arr.concat(arr2);
console.log(letter);
console.log([...arr, ...arr2]);

//JOIN
console.log(letter.join('_'));
