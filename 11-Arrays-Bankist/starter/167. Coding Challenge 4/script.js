'use strict';
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach((el) => (el.recommendedFood = Math.trunc(el.weight ** 0.75 * 28)));

const dogOfSarah = dogs.find((el) => {
  if (el.owners.includes('Sarah')) {
    return el;
  }
});

console.log(dogOfSarah);
console.log(
  `Chó của Sarah đang ăn ${
    dogOfSarah.curFood > dogOfSarah.recommended * 0.9 &&
    dogOfSarah.curFood < dogOfSarah.recommended * 1.1
      ? 'ăn vừa đủ'
      : 'ăn nhiều quá'
  }`,
);

const ownersEatTooMuch = dogs
  .filter((el) => el.curFood > el.recommendedFood)
  .flatMap((el) => el.owners);
const ownersEatTooLittle = dogs
  .filter((el) => el.curFood < el.recommendedFood)
  .flatMap((el) => el.owners);

console.log(
  `Chó của ${ownersEatTooMuch.join(
    ' and ',
  )} ăn quá nhiều\nChó của ${ownersEatTooLittle.join(' and ')} ăn quá ít`,
);

console.log(
  `Có con chó nào ăn chính xác lượng thức ăn hay không ? : ${dogs.some(
    (el) => el.curFood === el.recommendedFood,
  )}`,
);

console.log(
  `Có con chó nào ăn đủ lượng thức ăn hay không ? : ${dogs.some(
    (el) =>
      el.curFood > el.recommendedFood * 0.9 &&
      el.curFood < el.recommendedFood * 1.1,
  )}`,
);

const eatingOK = dogs.filter(
  (el) =>
    el.curFood > el.recommendedFood * 0.9 &&
    el.curFood < el.recommendedFood * 1.1,
);
console.log(eatingOK);

const copyDogs = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(copyDogs);
