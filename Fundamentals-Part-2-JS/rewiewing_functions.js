/* const calcAge = function(birthYear) {
    return 2037 - birthYear;
}


const yearsUntilRetirement = function (birthYear, firstName)  {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
   
}

console.log(yearsUntilRetirement(1998, 'Major'));
console.log(yearsUntilRetirement(1950, 'Sama')); */

/* const calcAverage = (a, b, c) => (a + b + c) / 3
console.log(calcAverage(3, 4, 5))

const scoreDolphins = calcAverage(44, 23, 71)
const scoreKoalas = calcAverage(65, 54, 49)
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins Win(${avgDolphins} vs. ${avgKoalas})`)
    } else if (avgKoalas >= 2 * avgKoalas) {
        console.log(`Koalas Win(${avgKoalas} vs. ${avgDolphins})`)
    } else {
        console.log('No team Wins')
    }
}

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111); */

const calcAverage = (a, b, c) => (a + b + c) / 3
console.log(calcAverage(3, 4, 5))

const reytingFriends = calcAverage(100, 200, 300);
const reytingHimym = calcAverage(85, 95, 105);
console.log(reytingFriends, reytingHimym);

const checkWinner = function (avgFriends, avghimym) {
    if (avgFriends >= 2 * avghimym) {
        console.log(`Friends Win 🤩 (${avgFriends} vs. ${avghimym})`)
    } else if (avghimym >= 2 * avgFriends) {
        console.log(` Himym Win 🤩 (${avghimym} vs. ${avgFriends})`)
    } else {
        console.log('No team wins')
    }
}
checkWinner(reytingFriends, reytingHimym);
