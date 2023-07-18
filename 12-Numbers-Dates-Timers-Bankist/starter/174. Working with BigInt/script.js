'use strict';
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 - 1);
console.log(2 ** 53);
console.log(2 ** 53 + 1);

//BigINT
console.log(53453454353453454354353453533453545543n);
console.log(BigInt(5345345435)); // BigINT không hiển thị chính xác với những số quá lớn nên sử dụng n
//Operations
console.log(10000n + 10000n);
console.log(65436464456546645n * 10000n);
// không thể tính căn bậc 2 của BigINT :
//console.log(Math.sqrt(16n)); //Cannot convert a BigInt value to a number

const huge = 1342455433534543543n;
const num = 10;
//console.log(huge * num); //Cannot mix BigInt and other types, use explicit conversions
console.log(huge * BigInt(num));

//So sánh
console.log(20n > 15); //true
console.log(20n === 20); //false
console.log(typeof 20n); // bigint
console.log(20n == '20'); //true
console.log(huge + 'là 1 số rất lớn đó nhé '); //1342455433534543543là 1 số rất lớn đó nhé

//Phép chia
console.log(4n / 2n); //2n
console.log(10n / 3n); //3n
