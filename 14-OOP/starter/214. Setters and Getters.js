'use strict';
const account = {
  name: 'jonas',
  movement: [200, 300, 400, 55, 66, , 99],
  get lastest() {
    return this.movement.slice(-1).pop();
  },
  set lastest(move) {
    this.movement.push(move);
  },
};
console.log(account.lastest);
account.lastest = 1234;
console.log(account.movement);
