/* const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Major';
const major = [firstName, 'Sama', 2037 - 1998, ' teacher ', friends];
console.log(major);

// Exercise

const calcAge = function (birthYear) {
    return 2037 - birthYear
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1,age2,age3);


const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1 ])];
console.log(ages); */

/* const friends = ['Micheal', 'Steven', 'Peter']
friends.push('Jay')
console.log(friends);

friends.unshift('John')
console.log(friends);  

const calcTip = function(bill) {
    return bill >= 50 && <= 300 ? bill * 0.15 :
    bill * 0.2;
} */

const majorArray = [ 
    'Major',
    'Sama',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const major = {
    firstName: ' Major',
    lastName : 'Sama',
    age : 2037- 1998,
    job : 'teacher',
    friends : ['Michael', 'Peter', 'Steven']
}

console.log(major);
