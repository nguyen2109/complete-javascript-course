'use strict';

const vna = {
  airline: 'VietNameAirLine',
  iataCode: 'VNA',
  bookings: [],
  book: function (flightNum, name) {
    console.log(
      `${name} đã đặt 1 ghế ngồi trên ${this.airline} - ${this.iataCode}-${flightNum}`,
    );
    this.bookings.push({ flight: `${this.iataCode}-${flightNum}`, name });
  },
};

const vj = {
  airline: 'VietJet',
  iataCode: 'VJ',
  bookings: [],
};

const bambo = {
  airline: 'BamBooAirLine',
  iataCode: 'BBA',
  bookings: [],
};

const book = vna.book;
//Bind method
const bookVJ = book.bind(vj);
const bookBamBoo555 = book.bind(bambo, 555);
bookVJ(223, 'Khoa Nguyên');
bookBamBoo555('Đăng Ỉn');

bambo.planes = 1000;
bambo.buyPlanes = function () {
  this.planes++;
  console.log(`Tổng số máy bay : ${this.planes}`);
};

// document
//   .getElementById('buy')
//   .addEventListener('click', bambo.buyPlanes.bind(bambo));
// // console.log(vj);
// // console.log(bambo);

function addTAX(rate, value) {
  return value + rate * value;
}
console.log(addTAX(0.1, 200));

const addVAT = addTAX.bind(null, 0.23);
console.log(addVAT(200));

const addTAX2 = (rate) => (value) => {
  return value + rate * value;
};

const addVAT2 = addTAX2(0.23);
console.log(addVAT2(200));
