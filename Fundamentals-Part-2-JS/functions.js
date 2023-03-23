/* function logger() {
   console.log('My name is Major')
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
   // console.log(apples,oranges);
   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
   return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

function harc(kum, su) {
   const harcKarisimi = `Harcta ${kum} kum ve ${su} su vardir.`
   return harcKarisimi;
}

const harcMalzemesi = harc(2, 1);
console.log(harcMalzemesi);


function calcAge1(birthYear) {
   return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

const calcAge2 = function (birthYear) {
   return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age2);


// Arrow Function

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1998);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
   const age = 2037 - birthYear;
   const retirement = 65 - age;
   // return retirement;
   return `${firstName} retires in ${retirement} years`
}
console.log(yearsUntilRetirement(1998, 'Major'));
console.log(yearsUntilRetirement(1992, 'Sama')); */


function cutFruitPieces(fruit) {
    return fruit * 4;
}


function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangesPieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of  apples and ${orangesPieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));