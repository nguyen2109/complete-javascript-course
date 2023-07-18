'use strict';

function oneWord(str) {
  return str.replace(/ /g, '').toLowerCase();
}

function upperFirstWord(str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
}

function transform(str, fn) {
  console.log(
    `Từ ban đầu : ${str} \n
    Từ đã biến đổi : ${fn(str)} \n
    Công cụ biến đổi từ : ${fn.name}`,
  );
}

transform('nguyen Khoa Dao', upperFirstWord);
transform('nguyen Khoa Dao', oneWord);
