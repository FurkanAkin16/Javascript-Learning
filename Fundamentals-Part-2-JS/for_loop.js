/* console.log('Lifting weights repetition 1 ')
console.log('Lifting weights repetition 2 ')
console.log('Lifting weights repetition 3 ')
console.log('Lifting weights repetition 4 ')
console.log('Lifting weights repetition 5 ')
console.log('Lifting weights repetition 6 ')
console.log('Lifting weights repetition 7 ')
console.log('Lifting weights repetition 8 ')
console.log('Lifting weights repetition 9 ')
console.log('Lifting weights repetition 10 ') */ 

/* for(let rep = 1; rep <=10; rep++ ) {
    console.log(` Lifting weights repetition ${rep} `)
} */

const major = [ 
    'Major',
    'Sama',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const types = [];

for(let i = 0; i < major.length ; i++ ) {
    console.log(major[i], typeof major[i]);

    types.push(typeof major [i])
}
console.log(types)


const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037- years[i]);
}
console.log(ages)

console.log('---- ONLY STRİNG')
for(let i = 0; 1 < major.length; i++) {
    if(typeof[i] !== 'string') continue;

    console.log(major[i],typeof major[i])
}