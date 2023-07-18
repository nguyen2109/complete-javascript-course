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

const book = vna.book;
vna.book(123, 'Nguyên');
//Call method
book.call(vj, 123, 'Đăng Ấn');
book.call(vj, 333, 'Đăng Ỉn');
book.call(vna, 222, 'Đăng Nguyên');
//Apply method
const bambo = {
  airline: 'BamBooAirLine',
  iataCode: 'BBA',
  bookings: [],
};
const flightData = [333, 'Khoa Nguyên'];
book.apply(bambo, flightData); // apply method phải truyền vào 1 array

console.log(bambo);
console.log(vna);
console.log(vj);
