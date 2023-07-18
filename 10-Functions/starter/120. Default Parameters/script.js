'use strict';

const bookings = [];

const createBooking = function (
  flightNum,
  numPasssenger = 1,
  price = 20 * numPasssenger,
) {
  const booking = {
    flightNum,
    numPasssenger,
    price,
  };
  bookings.push(booking);
  console.log(bookings);
};

createBooking('LH123', 5);
