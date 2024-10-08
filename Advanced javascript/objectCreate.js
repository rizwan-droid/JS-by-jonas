// another method to create object and inheritance.

var personProto = {
    calcAge: function() {
        console.log(2024 - this.yearOfBirth);
    }
};

var rizwan = Object.create(personProto);
rizwan.name = 'rizwan';
rizwan.yearOfBirth = 2000;
rizwan.job = 'student';
console.log(rizwan);

// we can provide property and data by this method as well. method to make object let us see another method.

var pankaj = Object.create(personProto, {
    name: {value: 'pankaj'},
    yearOfBirth: {value: 1999},
    job: {value: 'student'}
});

console.log(pankaj);