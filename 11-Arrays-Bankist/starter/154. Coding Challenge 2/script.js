'use strict';

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// /////Bài làm của Nguyên
function calcAverageHumanAge(ages) {
  const array = [];
  for (const el of ages) {
    let humanAge = 0;
    if (el <= 2) {
      humanAge += 2 * el;
    } else if (el > 2) {
      humanAge += 16 + el * 4;
    }
    array.push(humanAge);
  }
  //2
  const fillterAge18 = array.filter((el) => el > 18);
  console.log(`2.Loại trừ chó 18 tuổi : ${fillterAge18}`);
  //3
  const totalAge = fillterAge18.reduce((acc, el) => acc + el, 0);
  const avgAge = totalAge / fillterAge18.length;
  console.log(`3.Tuổi trung bình là : ${avgAge}`);
}
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// /////////////////////////////////////////////////
// /////////////////////////////////////////////////

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// /////Đáp án chính xác và clean nhất
const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  const fillterAge18 = humanAge.filter((el) => el > 18);
  console.log(`2.Loại trừ chó 18 tuổi : ${fillterAge18}`);
  const avgAge =
    fillterAge18.reduce((acc, el) => acc + el, 0) / fillterAge18.length;
  console.log(`3.Tuổi trung bình là : ${avgAge}`);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
