// Dot vs. Bracket Notation
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
  };
//new object syntax
var Mike = new Object();
Mike.firstName = 'Mike';
Mike.age = 30;
Mike.isMarried = true;

  console.log(jonas);
  
  console.log(jonas.lastName);
  console.log(jonas['lastName']);
  
// object mutation

jonas.job = 'designer';
jonas[isMarried] = true;
  

  
  const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
  
  if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
  } else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
  }
  
  jonas.location = 'Portugal';
  jonas['twitter'] = '@jonasschmedtman';
  console.log(jonas);