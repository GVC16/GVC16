/* Equality check == and comparisons > < >= <= work differently
comparisons convert null to a number, treating it as 0.
That's console.log(null>=0)--> true while console.log(null>0)--> false
*/
// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);

// console.log("2"===2);

// Stack(Primitive); Heap(Non-Primitive)
let myWebsiteName = "kuchtobhi.com";
let anotherName = myWebsiteName;
anotherName = "kuchbhitonahi.com";
console.log(myWebsiteName);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upiId: "user@ybl123"
};
let usertwo = userOne;
usertwo.email = "user@yahoo.com";

console.log(userOne.email);
console.log(usertwo.email);




