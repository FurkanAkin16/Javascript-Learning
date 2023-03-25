
/* let rep = 1;
while (rep <=10) {
 //   console.log(`WHILE: Lifting weigths repetition ${rep}`);
    rep++;
} 

let dice = Math.trunc(Math.random() * 6 ) + 1;


while (dice !==6) {
    console.log(`You rolled a ${dice}`)
  dice = Math.trunc(Math.random() * 6 ) + 1;
  if ( dice === 6 ) console.log('Loop is about to end...')
} */


function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
      return bill * 0.15;
    } else {
      return bill * 0.2;
    }
  }

// Create an array of test bill values
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Create empty arrays for tips and totals
const tips = [];
const totals = [];

for ( let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i])
    tips.push(tip)
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals)

const calcAverage = function(arr) {
    
}