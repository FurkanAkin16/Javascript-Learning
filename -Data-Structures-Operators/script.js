'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  desert: ['Sütlac', 'Keskül', 'Tulumba'],
  smoke: ['Parliament', 'Marlboro', 'Winston'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

const [firstSmoke, , secondSmoke] = restaurant.smoke;
console.log(firstSmoke, secondSmoke);

const [first, , second] = restaurant.desert;
console.log(first, second);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

/* const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary); */

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
/* const [i, , j] = nested;
console.log(i, j); */
const [i, , [j, k]] = nested;
console.log(i, j, k);

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
