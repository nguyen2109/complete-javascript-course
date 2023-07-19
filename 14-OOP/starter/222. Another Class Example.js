class Account {
  constructor(owner, name, pin) {
    this.owner = owner;
    this.name = name;
    this.pin = pin;
    this.movements = [];
    //this.locale = navigator.language;
  }
  deposit(val) {
    this.movements.push(val);
  }
  withdraw(val) {
    this.movements.push(-val);
  }
}

const jonas = new Account('jonas', 'JonasSmith', 1111);
jonas.deposit(150);
jonas.deposit(130);
jonas.deposit(430);
jonas.withdraw(1);
jonas.withdraw(12);
jonas.withdraw(124);
console.log(jonas);
