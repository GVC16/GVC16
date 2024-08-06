/* Equality check == and comparisons > < >= <= work differently
comparisons convert null to a number, treating it as 0.
That's console.log(null>=0)--> true while console.log(null>0)--> false
*/
console.log(null>0);
console.log(null==0);
console.log(null>=0);

console.log("2"===2);