'use strict';

const num = 5345345435.456456;
const options = {
  style: 'currency',
  // unit: 'celisus',
  currency: 'EUR',
  useGrouping: false,
};
console.log(new Intl.NumberFormat('en-US', options).format(num));
console.log(new Intl.NumberFormat('en-GB', options).format(num));
console.log(new Intl.NumberFormat('de-DE', options).format(num));
//console.log(new Intl.NumberFormat(navigator.language).format(num));
