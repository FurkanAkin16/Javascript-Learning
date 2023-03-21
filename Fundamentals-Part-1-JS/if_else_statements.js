const age = 15;
if (age >= 18) {
    console.log('Sarah can start driving license 🚗')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :) `)
}


const birthYear = 2000;
let century;
if (birthYear <= 2000) {
    century = '20.yy';
} else {
    century = '21.yy';
}
console.log(century);


const massMark = 100;
const heightMark = 1.86;
const massJohn = 85;
const heightJohn = 1.75;


const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);


if (BMIMark > BMIJohn) {
    console.log (`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn}) ! `)
} else {
    const otherWin = massJohn - massMark;
    console.log(`John's BMI (${BMIJohn})  is higher than Mark's (${BMIMark}) ! `)
}
