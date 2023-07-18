'use strict';

(function () {
  console.log('Chỉ chạy 1 lần thôi nè');
})();
// console.log(private); // lỗi

(() => console.log('chỉ chạy 1 lần thôi nè'))();
