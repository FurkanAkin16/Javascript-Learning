'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  // Never to this
  /* this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };*/
};

const major = new Person('Major', 1998);
console.log(major);
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}
const matilda = new Person('matilda', 2017);
const jack = new Person('jack', 1985);
console.log(matilda);
console.log(jack);

// Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
major.calcAge();

console.log(major.__proto__);
console.log(major.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(major));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(major, matilda);
console.log(major.hasOwnProperty('firstName'));
console.log(major.hasOwnProperty('calcAge'));
console.log(major.__proto__);
// Object.protoype (top of protoype chain)
console.log(major.__proto__.__proto__);
console.log(major.__proto__.__proto__.__proto__);
console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9];
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

// Coding Challange #1
const Car = function (name, speed) {
  this.name = name;
  this.speed = speed;
};

const bmw = new Car('Bmw', 120);
console.log(bmw);
const mercedes = new Car('Mercedes', 95);
console.log(mercedes);
// Accelerate
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.name} is going at ${this.speed}km/h`);
};
bmw.accelerate();
mercedes.accelerate();
// Brake
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.name} is going at ${this.speed}km/h`);
};
bmw.brake();
bmw.brake();
bmw.brake();
bmw.brake();

bmw.brake();
bmw.brake();
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
mercedes.brake();
