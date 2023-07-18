'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////DISPLAY MOVEMENTS
const displayMovements = function (movement, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort ? movement.slice().sort((a, b) => a - b) : movement;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
  <div class="movements__row">
     <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
     <div class="movements__value">${mov}€</div>
  </div>
    
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////Tolal Money In

function displaySummary(params) {
  const moneyIn = params.movements
    .filter((el) => el > 0)
    .reduce((acc, el) => acc + el);
  labelSumIn.textContent = `${moneyIn}€`;

  const moneyOut = params.movements
    .filter((el) => el < 0)
    .reduce((acc, el) => acc + el);
  labelSumOut.textContent = `${Math.abs(moneyOut)}€`;

  const laiSuat = params.interestRate / 100; // 1.2%
  const interest = params.movements
    .filter((el) => el > 0)
    .map((el) => el * laiSuat)
    .filter((el) => el > 1)
    .reduce((acc, el) => acc + el);
  labelSumInterest.textContent = `${interest}€`;
}

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////CREATE USERNAME
function createUserName(accs) {
  accs.forEach(function (params) {
    params.username = params.owner
      .toLowerCase()
      .split(' ')
      .map((name) => name[0])
      .join('');
  });
}
createUserName(accounts);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////Func UpdateUI
function updateUI(acc) {
  //Display Movements
  displayMovements(acc.movements);
  //Display Balance
  printBalance(acc);
  //Display Summary
  displaySummary(acc);
}
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////158. Implementing Login
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value,
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display Message
    labelWelcome.textContent = `Xin chào ${
      currentAccount.owner.split(' ')[0]
    } ✅`;
    //Display UI
    containerApp.style.opacity = 100;

    updateUI(currentAccount);
  }
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////159. Implementing Transfers
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value,
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    amount <= currentAccount.balance &&
    receiverAcc &&
    receiverAcc?.username !== currentAccount.username
  ) {
    console.log('Đã chuyển tiền');
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    updateUI(currentAccount);
  } else {
    console.log('Không hợp lệ');
  }
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////160. The findIndex Method

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const comfirmUser = inputCloseUsername.value;
  const comfirmPIN = Number(inputClosePin.value);

  if (
    comfirmUser === currentAccount.username &&
    comfirmPIN === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username,
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;

    console.log('Xóa hợp lệ');
  } else {
    console.log('Delete error');
  }
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////161. some and every

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    console.log(currentAccount.movements.push(amount));
    updateUI(currentAccount);
  }
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////163. Sorting Arrays

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////CALCULATOR AND PRINT BALANCE
function printBalance(params) {
  params.balance = params.movements.reduce((acc, el) => acc + el, 0);
  return (labelBalance.textContent = `${params.balance} €`);
}

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
