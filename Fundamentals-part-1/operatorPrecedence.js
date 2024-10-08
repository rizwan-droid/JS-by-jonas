// Operator Precedence
// we have chart of it.. according to the majority or precedence the operator performs like it simply helps us to know "if multiple operators are used in a single line then which should be performed first"

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);
//here "-" has more precedence than ">". so it performs at first

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);