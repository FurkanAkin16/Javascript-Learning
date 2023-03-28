'use strict';

/* function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = 'NEW OUTPUT!';
    }
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Major';
calcAge(1995); */

/* var firstName = 'Matilda';

const major = {
  firstName: 'Major',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
    // Solution 1
    /*   const self = this;
    const isMillenial = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
      //  console.log(this.year >= 1981 && this.year <= 1996);
    }; */

// Solution 2

/*  const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};
major.greet();
major.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8);
var addArrow = (a, b) => a + b; */

/* let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: ' Major',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('Friends:', friend);
console.log('Me', me); */

let lastName = 'Sama';
let oldLastName = lastName;
lastName = 'Hokage';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
(marriedJessica.lastName = 'Sama'), console.log('Before marriage:', jessica);
console.log('After marriage', marriedJessica);

// marriedJessica = {};
