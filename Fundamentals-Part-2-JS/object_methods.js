/* const major = {
    firstName: ' Major',
    lastName: 'Sama',
    birthYear: 1998,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriverLicense: true,

    // calcAge: function (birthYear) {
    //   return 2037 - birthYear;
    // }

    //  calcAge: function () {
    //   console.log(this);
    //   return 2037 - this.birthYear;
    // }
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    
    getSummary: function () {
        return ` ${this.firstName} is a ${this.calcAge } year old ${major.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'  } driver's licence `
    }
};



console.log(major.calcAge());
console.log(major.getSummary); */


const johnBmi = (78 / 1.69 ** 2);
console.log(johnBmi);
const markBmi = (92 / 1.95 ** 2);
console.log(markBmi);



if (johnBmi > markBmi) {
    console.log(`John's BMI (${johnBmi}) is higher than Mark's (${markBmi})`)
} else {
    console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})`)
}

// Other method 
console.log('-----------------------')
console.log('-----------------------')
console.log('-----------------------')
console.log('-----------------------')


const mark = {
    fullName :'Mark Miller',
    mass: 122,
    heigth: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / this.heigth **2;
        return this.bmi;
    }
}
const john = {
    fullName :'John Smith',
    mass: 92,
    heigth: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / this.heigth **2;
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();


if(markBmi > johnBmi) {
    console.log(`${mark.fullName}'s BMI (${markBmi}) is higher than ${john.fullName}'s BMI (${johnBmi})`)
} else if (johnBmi > markBmi) {
    console.log(`${john.fullName}'s BMI (${johnBmi}) is higher than ${mark.fullName}'s BMI (${markBmi})`)
}