//functions


calculateAge(2000);

function calculateAge(year){
    console.log(2024-year);
}


// as we learned the function declaration is already get stored in creation phase before the execution phase this is why we have called the function before declaration and it works. this is called hoisting.

// what about function expressions:

/*
 retirement(2000);
 var retirement = function (year) {
     console.log(65 - (2024-year));
 }
*/

// it is giving error as the hoisting only works with the function declaration.

// variables
console.log(age);
// it will show undefined as it is in the creation phase. if we havenot declared any variable named as age then it throws an error
var age=24;

function foo(){
    var age = 65;
    console.log(age);
}
foo();
console.log(age);

//console.log inside the function prints 65 as it is in different context and console.log at last prints 24 as it is stored in the global execution context.
