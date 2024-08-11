const myName = "Gaurav";
const repoCount = 50;

//console.log(myName + repoCount); //can be writen like this but use String 

console.log(`Hello my name is ${myName.toUpperCase()} and my repo count is ${repoCount}`);

const myAnotherName = new String('Gaurav Chourasiya'); //another way to declare string using object

// console.log(myAnotherName[3]);
// console.log(myAnotherName.charAt(2));
// console.log(myAnotherName.indexOf('h'));

const myNewString = myAnotherName.substring(7, 17);
console.log(myNewString);

const myAnotherNewString = myAnotherName.slice(-16, 4);
console.log(myAnotherNewString);




