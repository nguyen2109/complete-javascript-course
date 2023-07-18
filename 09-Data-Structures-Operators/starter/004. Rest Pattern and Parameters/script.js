'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelevery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Đơn hàng của bạn là ${this.starterMenu[starterIndex]} và ${this.mainMenu[mainIndex]} sẽ giao tại ${address} vào lúc ${time}`,
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Đây là đơn bánh Pasta của bạn với ${ing1} ,  ${ing2} , ${ing3}`,
    );
  },
  orderPizza: function (thanhphanchinh, ...thanhphankhac) {
    console.log(thanhphanchinh, thanhphankhac);
  },
};
restaurant.orderPizza('Nấm', 'Thịt', 'Đậu', 'Hành');
restaurant.orderPizza('Nấm');
// SPREAD bởi vì dấu ... nằm bên phải của dấu =
const arr = [1, 2, ...[3, 4]];

// REST bởi vì dấu ... nằm bên trái của dấu =
const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

const [pizza, risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
//console.log(otherFood);

//Object
const { sat, ...otherDays } = restaurant.openingHours;
//console.log(sat);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return console.log(sum);
};
add(2, 5);
add(1, 2, 3, 4, 5);
