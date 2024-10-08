// Equality Operators: == vs. ===
const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');
// datatype and value both should be same
if (age == 18) console.log('You just became an adult :D (loose)');
//value should be same data types doesnot matters.
const favourite = Number(prompt("What's your favourite number?"));
//it means anything you enter must be a number or it will convert into a number.
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 -> FALSE
  console.log('Cool! 23 is an amzaing number!')
} else if (favourite === 7) {
  console.log('7 is also a cool number')
} else if (favourite === 9) {
  console.log('9 is also a cool number')
} else {
  console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?');
// datatypes and value both should not be same