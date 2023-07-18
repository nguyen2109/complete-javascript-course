'use strict';

//setTimeout

const pizzaTimer = setTimeout(() => console.log(`Bạn có đơn bánh pizza`), 1000);
const pizzaTimer2 = setTimeout(
  (arg1, agr2) => console.log(`Bạn có đơn bánh pizza với ${arg1} và ${agr2}`),
  2000,
  'Tôm',
  'Thịt',
);
console.log('waitting...');
const arg = ['Tôm', 'Thịt'];
const pizzaTimer3 = setTimeout(
  (arg1, arg2) => console.log(`Bạn có đơn bánh pizza với ${arg1} và ${arg2}`),
  2500,
  ...arg,
);

// clear timeout

if (arg.includes('Tôm')) {
  clearTimeout(pizzaTimer3);
}
//set interval
setInterval(function () {
  const now = new Date();
  const hour = now.getHours();
  const min = now.getMinutes();
  const s = now.getSeconds();
  console.log(`${hour} : ${min} : ${s}`);
}, 1000);
