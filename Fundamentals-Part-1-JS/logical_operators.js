/*const hasDriversLicence = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

const shouldDrive = hasDriversLicence && hasGoodVision;

/* if (shouldDrive) {
    console.log('Sarah is able to drive!')
} else {
    console.log('Someone else should drive...')
} */

/* const isTired = false; // C
console.log(hasDriversLicence && hasGoodVision && isTired);

if (hasDriversLicence && hasGoodVision && !isTired) {
   console.log('Sarah is able to drive!')
} else {
   console.log('Someone else should drive...')
} */

/*const teamDolphin = 96 + 108 + 90;
const teamKoalas = 88 + 18 + 110;
console.log(` Team Dolphin avarage score ${teamDolphin / 3}  `);
console.log(` Team Koalaca avarage score  ${teamKoalas / 3}`);

if (teamDolphin > teamKoalas) {
   console.log(' Dolphin Winner ')
} else if (teamKoalas > teamDolphin) {
   console.log(' Koalas Winner')
} else if (teamDolphin === teamKoalas) {
   console.log(' No one winner')
} */


const teamDolphin = (97 + 112 + 80) / 3;
const teamKoalas = (109 + 95 + 50) / 3;
console.log(teamDolphin, teamKoalas);


if (teamDolphin > teamKoalas && teamDolphin >= 100) {
    console.log('Dolphins win the trophy')
} else if (teamKoalas > teamDolphin && teamKoalas >= 100) {
    console.log('Koala win the tophy')
} else if (teamDolphin === teamKoalas && teamDolphin >= 100 && teamKoalas >= 100) {
    console.log('Both win the trophy')
} else {
    console.log('No one wins the trophy');
}