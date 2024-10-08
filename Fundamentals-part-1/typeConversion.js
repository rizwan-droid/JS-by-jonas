// Type Conversion and Coercion

// type conversion
// converts the datatype using some functions of js.
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
// converts the string into a number
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);
// converts 23 into string

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
// js automatically converts '11' string into number i.e called type coercion
console.log(n);