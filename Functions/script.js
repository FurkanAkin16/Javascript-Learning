'use strict';
/* const bookings = [];

const creatBooking = function (
  flightNum,
  NumPassagengers = 1,
  price = 199 * NumPassagengers
) {
  // ES5
  // NumPassagengers = NumPassagengers || 1;
  //price = price || 199;

  const booking = {
    flightNum,
    NumPassagengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

creatBooking('LH123');
creatBooking('LH123', 2, 800);
creatBooking('LH123', 2);
creatBooking('LH123', 5);
creatBooking('LH123', undefined, 1000); */

/*const flight = 'LH234';
const major = {
  name: 'Major Sama',
  passport: 24567893524,
};

const checkIn = function (flightNuM, passenger) {
  flightNuM = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 24567893524) {
    alert('Check in');
  } else {
    alert('Wronk passport ! ');
  }
};
//checkIn(flight, major);
// console.log(flight);
// console.log(major);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(major);
checkIn(flight, major); */
// console.log('----BREAK-----');
/* const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best !', upperFirstWord);
transformer('Javascript is the best !', oneWord);

const high5 = function () {
  console.log('🙋‍♀️');
};
document.body.addEventListener('click', high5);

['Major', 'Martha', 'Adam', 'Zort'].forEach(high5); */

/* const justWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const bigFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Orjinal Metin: ${str}`);
  console.log(`Transformed Metin: ${fn(str)}`);
  console.log(`Transformed by : ${fn.name}`);
};

transformer('Yenişehir is the best!', bigFirstWord);
transformer('Yenişehir is the best!', justWord);

const high1 = function () {
  console.log('🙋‍♀️');
};
document.body.addEventListener('click', high1); */

/* const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Major');
greeterHey('Sama');

greet('Hello')('Major');

// Challange

const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Major'); */

///////////////////////////////////////
// The call and apply Methods
/*const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

//Bind method

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Major Sama');
bookEW23('Martha Cooper');

// With event listeners
lufthansa.planes = 300;

lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT= value => value + value * rate;
console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23)); */

// Challange #1

/*const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: Javascript', '1: Python', '2:Rust', '3:C++'],
  answers: new Array(4).fill(0),
}; */

/* const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker(); */
// Example 1
/* let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
h();
f();
// Example 2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passenger`);
    console.log(`There are 3 groups, eact with ${perGroup} passengers`);
  }, 1000);
  console.log(`Will start boarding in${wait} second`);
};

const perGroup = 1000;
boardPassengers(180, 3); */

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'black';
  const blueHeader = document
    .querySelector('body')
    .addEventListener('click', function () {
      header.style.color = 'blue';
    });
  const h1size = document
    .querySelector('h1')
    .addEventListener('click', function () {
      h1size.style.fontSize = '100px';
    });
})();
