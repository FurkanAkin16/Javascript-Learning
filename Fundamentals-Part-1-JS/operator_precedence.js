/* const now = 2037;
const ageMajor = now - 1998 ;
const ageSama = now- 2018;
console.log(now - 1991 >now - 2018);

let x,y;
x = y = 25 - 10 - 5 ;
console.log(x,y)

const averageAge = (ageMajor + ageSama) / 2 
console.log(ageMajor, ageSama, averageAge); */

/* const mark = 78
const markHeight = 1.69;
const john = 85 
const johnHeight = 1.95; */ 
const mark = 95
const markHeight = 1.88;
const john = 85 
const johnHeight = 1.76;

const BMIMark = mark / markHeight ** 2 
const BMIJohn = john / (johnHeight * johnHeight);
const markHigherBMI = BMIMark > BMIJohn; 
console.log(BMIMark, BMIJohn , markHigherBMI);
