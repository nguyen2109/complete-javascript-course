'use strict';

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

function checkDogs(dogsJulia, dogsKate) {
  //1
  const juliaSlice = dogsJulia.slice(
    dogsJulia.length - (dogsJulia.length - 2),
    -2,
  );
  //2
  const juliaAndKate = juliaSlice.concat(dogsKate);

  juliaAndKate.forEach(function (tuoi, i, arr) {
    const type = tuoi > 3 ? 'chó trưởng thành' : 'chó con';

    console.log(`Chú chó số ${i + 1} : là ${type} và ${tuoi} tuổi  `);
  });
}

console.log('----- § Data 1 -----');
//§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
checkDogs(dogsJulia, dogsKate);
console.log('----- § Data 2 -----');
//§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
