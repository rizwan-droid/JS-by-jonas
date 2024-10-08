// console.log(1985);
// function calculateAge(year){
//     console.log(2016-year);
//     console.log(this);
//     // it prints the window object as it shows the window object when it is regular function call.
// }

var john = {
    name: "john",
    year: 1990,
    calculateAge: function (){
        console.log(this);
        console.log(2016-this.year);
    // now this keyword refers to the john object
    //     function innerfunc(){
    //         console.log(this);
    // // now this keyword refer to window object because it shows window for a regular function call.
    //     }
    //     innerfunc();
    // }
}
}
john.calculateAge();

var mike={
    name: "mike",
    year: 1999,
}
// method borrowing
mike.calculateAge = john.calculateAge;
mike.calculateAge();