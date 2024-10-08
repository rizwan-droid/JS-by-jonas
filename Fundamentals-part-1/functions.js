// Functions
function logger() {
    console.log('My name is Jonas');
  }
  
  // calling / running / invoking function
  logger();
  logger();
  logger();
  
  function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
  }
  
  const appleJuice = fruitProcessor(5, 0);
  console.log(appleJuice);
  
  const appleOrangeJuice = fruitProcessor(2, 4);
  console.log(appleOrangeJuice);
  
  const num = Number('23');
  console.log(typeof num);


  // Another Example
  /*
  function calculateAge(birthyear) {
    return 2024 - birthyear;
  }
  var ageJohn= calculateAge(1990);
  var ageMike= calculateAge(1948);
  var ageJane= calculateAge(1969);
  console.log(ageJohn, ageMike, ageJane);

  function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65-age;

    if(retirement > 0){
        console.log(firstName + ' retires in ' + retirement + ' years. ')
    }else{
        console.log(firstName + 'is already retired' );
    }
}
yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');

*/
