// Importing Module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
//addToCart('bread', 5);
// console.log(price, tq);
// console.log('Importing Module');
//import * as ShoppingCard from './shoppingCart.js';
//ShoppingCard.addToCart('bread', 5);

//import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
//console.log(price);
//import shoppingCart from './shoppingCart.js';
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);

// // console.log('Start fetching');
// // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// // const data = await res.json();
// // console.log(data);
// // console.log('Something');

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();
// console.log(lastPost);
// // Not very clean
// // lastPost.then(last => console.log(last));

// const lasPost2 = await getLastPost();
// console.log(lasPost2);

// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;
//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
//   };
//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product}  ordered from supplier`);
//   };
//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();
// ShoppingCart2.addToCart('apple', 4);
// ShoppingCart2.addToCart('pizza', 2);

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}

const major = new Person('Major');
console.log('Major' ?? null);
console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable';

// import 'core-js/stable/array/find.js';

import 'regenerator-runtime/runtime.js';
