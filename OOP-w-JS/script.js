'use strict';

/*const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  // Never to this
  /* this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
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
/*const Car = function (name, speed) {
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
mercedes.brake(); */

// Class expression

/*class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fullName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }
}
const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

/*PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};*/
/*jessica.greet();
const walter = new PersonCl('Walter White', 1985);

// 1. Classes are NOT hoiseted
// 2. Classes are first-class citizes
// 3. Classes are executed in strict mode

// Coding Challange 2

/*class CarCl {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.name} is going at ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.name} is going at ${this.speed} km/h`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);
/*const account = {
  owner: 'Major',
  movements: [200, 530, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);
account.latest = 50;
console.log(account.movements);

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();*/

// Inheritance Between "Classes": Constructor Funcstions

/*const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
// Linking Prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor); */

// Coding Challange #3

/*const Car = function (name, speed) {
  this.speed = speed;
  this.name = name;
  console.log(`${name} going at ${speed} `);
};

Car.prototype.accelerate = function () {
  return console.log(
    `${this.name} is accelerating, speed now is ${(this.speed += 10)} km/h`
  );
};
Car.prototype.brake = function () {
  return console.log(
    `${this.make} is breaking, speed now is ${(this.speed -= 5)} km/h`
  );
};

const EV = function (name, speed, charge) {
  Car.call(this, name, speed);
  this.charge = charge;
  console.log(`${name}'s  charge is at ${charge}% `);
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(`${this.name} is charged to ${this.charge}% `);
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.name} is going with ${this.speed} km/h, with a charge of  ${this.charge}%`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.accelerate();
tesla.chargeBattery(100);

const Traktor = function (name, speed, mazot) {
  Car.call(this, name, speed);
  this.mazot = mazot;
  console.log(`${name} has left ${mazot}`);
};

Traktor.prototype = Object.create(Car.prototype);

Traktor.prototype.fuelfull = function (fueldolum) {
  this.mazot = fueldolum;
  console.log(`${this.name} is fuel to ${this.mazot}%`);
};

const newHolland = new Traktor('New Holland', 45, 5);
newHolland.fuelfull(100);*/
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fullName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }
  // Static Method
  static hey() {
    console.log('Hey There ');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first !
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudenProto = Object.create(PersonProto);
const jay = Object.create(StudenProto);
