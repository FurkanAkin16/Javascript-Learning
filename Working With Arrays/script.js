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

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = ` <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}</div>
  </div> `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// SLICE
/* let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

//REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT

const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' *-* ')); */

/* const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('Major'.at(0));
console.log('Major'.at(-1)); */

/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}
console.log('-----FOREACH----');

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
}); */

// Map
/* const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(` ${value}: ${value}`);
}); */

// Challange
/* Julia ve Kate köpekler üzerine bir çalışma yapıyorlar. Her biri, 5 köpek sahibine köpeğinin yaşı hakkında sorular sordu ve verileri bir diziye kaydetti
 (her biri için bir dizi). Şimdilik, sadece bir köpeğin yetişkin veya yavru olduğunu bilmek istiyorlar. Bir köpek en az 3 yaşındaysa yetişkin, 3 yaşından küçükse yavrudur.

Görevleriniz:

Julia, ilk ve son iki köpeğin sahiplerinin aslında kedileri olduğunu öğrendi! Bu yüzden Julia'nın dizisinin bir yüzey kopyasını oluşturun ve kedi yaşlarını
 o kopyalanan diziden çıkarın (çünkü işlev parametrelerini değiştirmek kötü bir uygulamadır).
Hem Julia'nın (düzeltildiği) hem de Kate'in verilerini içeren bir dizi oluşturun.
Her kalan köpek için, konsola bir yetişkin ("1 numaralı köpek yetişkindir ve 5 yaşındadır") veya yavru ("2 numaralı köpek hala yavrudur") olduğunu yazdırın.
İşlevi her iki test veri kümesi için de çalıştırın.
Test verileri:
§ Veri 1: Julia'nın verileri [3, 5, 2, 12, 7], Kate'in verileri [4, 1, 15, 8, 3]
§ Veri 2: Julia'nın verileri [9, 16, 6, 8, 3], Kate'in verileri [10, 5, 6, 1, 4]

İpuçları: Bu bölümdeki tüm derslerden araçlar kullanılabilir. İyi şanslar! */

/* const juliaDog = [2, 5, 2, 12, 7];
const kateDog = [4, 1, 15, 8, 3];
console.log(juliaDog.slice(1, -2));
console.log(['Julia Dog', ...juliaDog.slice(1, -2), 'Kate Dog', ...kateDog]);

juliaDog.forEach(function (mov, i) {
  if (mov < 3) {
    console.log(` less than 3 years old,  still a pup `);
  } else {
    console.log(` Over 3 years old, this is an adult `);
  }
});
console.log('---BREAK----');
kateDog.forEach(function (move, index) {
  if (move < 3) {
    console.log(` less than 3 years old,  still a pup `);
  } else {
    console.log(` Over 3 years old, this is an adult `);
  }
}); */

/* const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);

  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i} 
      is an adult, and is ${dog} years old`);
    } else {
      console.log(`less than ${i} years old,  still a pup`);
    }
  });
};
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]); */
