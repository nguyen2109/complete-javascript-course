'use strict';

const arr = [1, 2, 3, 4, 5, , 6, 7];
const arr2 = new Array(1, 2, 3, 4, 5, 6, 7);

//Empty Array
const x = new Array(7);

console.log(x);

//Fill empty array
//x.fill(1); // [1,1,1,1,1,1,1]

x.fill(1, 3, 5); //[ <3 empty items>, 1, 1, <2 empty items> ]

console.log(x);

//Array.from()
const y = Array.from({ length: 7 }, () => 1); //[1,1,1,1,1,1,1]

const z = Array.from({ length: 7 }, (_, i) => i + 1); //[1, 2, 3, 4, 5, , 6, 7]

// Tạo 100 mảng với giá trị xúc xắc ngẫu nhiên
const a = Math.trunc(Math.random() * 6) + 1;

const xz = Array.from({ length: 100 }, () => Math.trunc(Math.random() * 6) + 1);

console.log(xz);
