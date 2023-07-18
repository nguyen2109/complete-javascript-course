'use strict';
// Chuyển thời gian về dạng Number để tính toán
const future = new Date();
console.log(+future);

const calDayPassed = (day1, day2) =>
  Math.round(Math.abs(day2 - day1) / (1000 * 60 * 60 * 24));
const day1 = calDayPassed(new Date(2022, 6, 21), new Date(2023, 6, 20));
console.log(`Số ngày đã trôi qua là : ${day1}`);
