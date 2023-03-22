const money = 0;

if (money) {
    console.log("Don't spend it all ;)")
} else {
    console.log('You should get a job!')
}

let height = 123;
if (height) {
    console.log('YAY! Height is defined')
} else {
    console.log('Height is UNDEFINED')
}

const age = 18;
if (age === 18)
    console.log('You just became an adult')

const favourite = Number(prompt("What's your favourite number ?"))

console.log(favourite);

if (favourite === 23) {
    console.log('Cool! 23 is amazing number !')
} else if (favourite === 7 ) {
    console.log('7 is also a cool number')
} else {
    console.log('Number is not 23 or 7 ')
}

if(favourite !== 23) console.log('Why Not 23?');