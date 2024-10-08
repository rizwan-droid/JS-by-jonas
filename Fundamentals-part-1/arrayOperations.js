// Basic Array Operations (Methods)
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John'); // add to last
console.log(friends);

// Remove elements
friends.pop(); //delete Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //add to First
console.log(friends);

console.log(friends.indexOf('Steven')); //shows the number at which it present
console.log(friends.indexOf('Bob')); // it is not present in the array thats why the result will always be -1.

friends.push(23);
console.log(friends.includes('Steven')); // checked the sub strings/value present in the array and return true or false i.e boolean result
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}