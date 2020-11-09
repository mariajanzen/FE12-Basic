const person = {
    firstName: 'John',
    lastName: 'Smith',
    gender: 'male',
    bio: function() {
        return this.firstName + ' ' + this.lastName + ' ' + this.gender;
    },
    greeting: function () {
        console.log("hello, " + this.bio())
    }
}

//function Person(firstName, lastName, gender) {
//   const person = {};
//
//   person.firstName = firstName;
//   person.lastName = lastName;
//   person.gender = gender;
//   person.bio = function() {
//       return person.firstName + ' ' + person.lastName + ' ' + person.gender;
//   };
//   person.greeting = function() {
//       return "hello, " + this.bio()
//   };
//   return person;
//

function Person(firstName, lastName, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.bio = function () {
        return this.firstName + ' ' + this.lastName + ' ' + this.gender;
    };
    this.greeting = function () {
        return "hello, " + this.bio()
    };
    return person;
}

const person1 = Person('Vasya', 'Pupkin', 'male');
const person2 = Person('Jack', 'Russel', 'male');

Person.prototype.greetOtherPerson = function (person) {
    return person.bio() + ' greets me ' + this.bio()
}