let person = {
    firstName: 'Aman',
    lastName:'Das'
}

const personalInfo = function(state,country) {
    console.log(this.firstName +" "+ this.lastName + " is from " + state + " in " + country);
}

personalInfo.call(person, 'Odisha', 'India');

personalInfo.apply(person, ['Odisha', 'India']);

const givePersonalInfo = personalInfo.bind(person, 'Odisha', 'India');
givePersonalInfo()