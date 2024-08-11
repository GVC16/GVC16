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

const myAnotherNewString = myAnotherName.slice(-17, -11); // method with reverse string, selecting portion of string
console.log(myAnotherNewString); // Will print "Gaurav" 

const newStringOne = "  Abeyaar         "; //string having pre and post white spaces 
console.log(newStringOne.trim());

/*
Note:
All string methods return a new string. They don't modify the original string.

Formally said:
Strings are immutable: Strings cannot be changed, only replaced.
*/

const url = "https://gauravchourasiya.com/gaurav%28javascript";
console.log(url.replace('%28', '-'));











