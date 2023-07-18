'use strict';
//Căn bậc 2
console.log('----- Căn bậc 2 ----');
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(25 ** 0.5);
//Căn bậc 3 ( cách duy nhất)
console.log('----- Căn bậc 3 ----');
console.log(8 ** (1 / 3));
//Lấy số lớn nhất
console.log('----- MAX ----');
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, '9'));
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, '9px')); //NaN
//Lấy số nhỏ nhất
console.log('----- MIN ----');
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, '9'));
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, '9px')); //NaN
// Diện tích hình tròn
console.log('----- Diện tích hình tròn ----');
console.log(Math.PI * Number.parseFloat('10px') ** 2);
//Số ngẫu nhiên
console.log('----- Số ngẫu nhiên ----');
console.log(Math.trunc(Math.random() * 6) + 1);
console.log('----- Function số ngẫu nhiên ----');
const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1);
console.log(randomInt(1, 5));
//Làm tròn số nguyên
console.log('----- Làm tròn số nguyên ----');
console.log(Math.trunc(23.3));
console.log('----- Làm tròn số nguyên gần nhất ----');
console.log(Math.round(23.3));
console.log(Math.round(23.6));
console.log('----- Làm tròn lên ----');
console.log(Math.ceil(23.3));
console.log(Math.ceil(23.6));
console.log('----- Làm tròn xuống ----');
console.log(Math.floor(23.3));
console.log(Math.floor('23.6'));
console.log('----- Làm tròn số âm ----');
console.log(Math.trunc(-23.3)); //-23
console.log(Math.floor(-23.3)); //-24 => floor làm tốt hơn trunc
//Làm tròn số thập phân
console.log('----- Làm tròn số thập phân ----');
//.toFixed() chỉ có thể trả về 1 string không phải Number
console.log((2.7).toFixed(0)); //3
console.log((2.7).toFixed(3)); //2.700
console.log((2.34567).toFixed(2)); //2.35
//Nếu muốn trả về Number thì covert sang Number thêm dấu + hoặc Number()
console.log(+(2.34567).toFixed(2)); //2.35
