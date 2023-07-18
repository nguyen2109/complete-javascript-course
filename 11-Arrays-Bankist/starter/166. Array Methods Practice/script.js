'use strict';
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
//1
const bankDepositSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((el) => el > 0)
  .reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum);

//2

const numDeposit1000 = accounts
  .flatMap((acc) => acc.movements)
  .filter((el) => el >= 1000).length;

console.log(numDeposit1000);

//3 Tạo 1 obj chứa nội dung tiền gửi vào và tiền rút ra

const sums = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.deposit += cur) : (sums.withdrawal += cur);
      return sums;
    },
    { deposit: 0, withdrawal: 0 },
  );
console.log(sums);

//4

function title(params) {
  const ex = ['a', 'an', 'is', 'nice'];
  console.log(
    params
      .toLowerCase()
      .split(' ')
      .map((el) => (ex.includes(el) ? el : el[0].toUpperCase() + el.slice(1)))
      .join(' '),
  );
}
title('this is a nice title');
