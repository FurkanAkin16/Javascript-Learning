/* const major = {
    firstName: ' Major',
    lastName: 'Sama',
    age: 2037 - 1998,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}

console.log(major);
console.log(major.lastName);
console.log(major['lastName']);

const nameKey = 'Name';
console.log(major['first' + nameKey]);
console.log(major['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Major ? Choose between firstName, lastName, age, job and friends');

if (major[interestedIn]) {
    console.log(major[interestedIn]);
} else {
    console.log('Wrong request ! Choose between firstName, lastName, age, job and friends')
} */

const friends = ['Michael', 'Peter', 'Steven']
const major = {
    firstName: ' Major',
    lastName: 'Sama',
    age: 2037 - 1998,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    bestFriends: 'Major has 3 friends but his best friend Micheal',
}
const interestedIn = prompt('What do you want to know about Major ? Choose between firstName, lastName, age, job and friends or BestFriends');

if (major[interestedIn]) {
    console.log(major[interestedIn]);
} else if (major.bestFriends) {
    console.log(`Major has 3 friends ${friends}  but his best friend Micheal`)
}
else {
    console.log('Wrong request ! Choose between firstName, lastName, age, job and friends or BestFriend')
} 