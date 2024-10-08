/*
var rizwan = {
    name: "rizwan",
    yearOfBirth: 2000,
    job: 'student'
};
// it is a single object if we want more object with same property then we need to create a function constructor/blueprint.

var Person = function (name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

var rizwan = new Person ('rizwan', 2000, 'student');
console.log(rizwan);

// This is an older method es5 but now we can do it by using class operator.
// new operator is used to create an empty object for the above function or class. as we learned earlier a new execution context is created whenever a function is called and this oject denotes the global variable however in this case new object is pointing to the new object variable which is created due to the new operator.

*/

class Person {
    name;
    yearOfBirth;
    job;
    constructor(name,  yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job; 
    }
    
}

Person.prototype.calcAge = function(){
    console.log(2024 - this.yearOfBirth);
};

Person.prototype.lastName = 'ahamad';

// using this method the new objects donot have the attached methods to them but they can easily use them or access them. this is called  inheritance.

let rizwan = new Person ('rizwan', 2000, 'student');
console.log(rizwan);

// now same for different persons
let pankaj = new Person('pankaj', 1999, 'student');
console.log(pankaj);

rizwan.calcAge();
pankaj.calcAge();
console.log(rizwan.lastName);
console.log(pankaj.lastName);

// now the function has accessable for all. now imagine if there are different method and 100 lines of code for all then it should not be good thats why we need inheritance.





