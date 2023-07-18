'use strict';

const flight = 'LH123';
const khoanguyen = {
  name: 'Đào Khoa Nguyên',
  passport: 21091999,
};
function checkIn(flightNum = 'LH999', passenger) {
  passenger.name = 'MR.' + passenger.name;
  console.log(passenger.name);

  if (passenger.passport === 21091999) {
    console.log('OK vào đi');
  } else {
    console.log('Sai passport');
  }
}

function newPassport(passenger) {
  passenger.passport = Math.trunc(Math.random() * 999999);
}

checkIn(flight, khoanguyen);
newPassport(khoanguyen);
console.log(khoanguyen);
