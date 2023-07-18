'use strict';
/*
//Tạo Dates
const now = new Date();
console.log(now);
console.log(new Date('September 24 1999 18:18:18'));
console.log(new Date('September 24,2020'));
console.log(new Date(2020, 10, 19, 8, 17, 22, 22));
console.log(new Date(2022, 9, 21, 8, 0));
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));
*/

//working with dates :
const future = new Date(Date.now()); // thời gian hiện tại
console.log(future);
console.log(future.getFullYear()); // get năm
console.log(future.getMonth()); // get tháng
console.log(future.getDate()); // get ngày
console.log(future.getDay()); // ngày trong tuần
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getMilliseconds());
console.log(future.toISOString()); // chuyển sang ISOstring
console.log(future.getTime());
console.log(new Date(future.getTime()));

console.log(Date.now());
console.log(future.setFullYear(1999)); // set year
// làm tương tự với setMonth, setDate.......
console.log(future);
