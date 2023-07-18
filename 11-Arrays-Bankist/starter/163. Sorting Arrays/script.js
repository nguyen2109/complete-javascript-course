'use strict';
const name = ['Nguyên', 'Ỉn', 'Đạt', 'Hậu', 'Cún'];
console.log(name.sort()); //abcd

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// Sắp xếp tăng dần
// movements.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   }
//   if (b > a) {
//     return -1;
//   }
// });
movements.sort((a, b) => a - b);
// Sắp xếp giảm dần
// movements.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   }
//   if (b > a) {
//     return 1;
//   }
// });
movements.sort((a, b) => b - a);

console.log(movements);
