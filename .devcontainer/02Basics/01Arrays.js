// Array
// resizable and can hold mixed values with mixed datatypes
/*
Shallow copies: A shallow copy of an object is a copy whose properties share the same 
references(points to the same underlying values) as those of the source object from which the copy 
was made.

Deep Copies: A deep copy of an object is a copy whose properties do not share the same 
references(points to the same underlying values) as those of the source object from which the copy 
was made.

*/
const myArray = [1,234,5,6,7,8,9,3];
const myHeroes = ["Shaktiman", "krish", "Naagraj"];

const myArray2 = new Array(1, 2, 3, 4, 5);
// console.log(myArray[1]);

// Array Methods

myArray.push(6); // add item to the array as the last element
// console.log(myArray);
// myArray.push(true);
// console.log(myArray);

myArray.pop() // removes last element from the array
// console.log(myArray);

// myArray.unshift(98); // adds passed element 0n the 0th index of the array
// console.log(myArray);
// myArray.shift(); // 
// console.log(myArray);

// console.log(myArray.includes(5)); //returns true/flase based on passed parameter exist in the array or not
// console.log(myArray.indexOf(3)); // returns the index number of passed parameter if exist in the array otherwise -1

const newArray = myArray.join(); //converts array to the string
//console.log(newArray); //returns array having string datatype

// Slice and Splice
// console.log("A", myArray);

const mySlicedArray = myArray.slice(0, 3); // only creates the new array from original array, keeping original array intact
// console.log("B", mySlicedArray);
const mySplicedArray = myArray.splice(1, 3); // splices the original array and create new array making original array changed
// console.log("C", mySplicedArray); 
// console.log(myArray); //After Splice method the original array has been changed

const marvelHeroes  = ["Thor", "spiderman", "Ironman"];
const dcHeroes = ["Batman", "Superman", "Wonder_Woman"];

// marvelHeroes.push(dcHeroes); // will add dcHeros array as an element in marvelheros array
// console.log(marvelHeroes);

const allSuperHeros = marvelHeroes.concat(dcHeroes); // Concat will create new array 
// console.log(allSuperHeros);

// using spread operator
const allNewSuperHeros = [...marvelHeroes, ...dcHeroes]; //creates new array having all the elements of different arrays
// console.log(allNewSuperHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [3, 9]]];
const usableAnotherArray = anotherArray.flat(2); // here parameter is depth create single array
console.log(usableAnotherArray);

//console.log(Array.isArray("Gaurav Chourasiya"));

console.log(Array.from("234235")); // creates an array of given parameter. works well for String.
console.log(Array.from({name: "Gaurav"})); // creates empty array cuz do not know whether create array using key or value.


let scoreOne  = 100;
let scoreTwo  = 200;
let scoreThree = 300;
console.log(Array.of(scoreOne, scoreTwo, scoreThree)); // creates new array with given parameters






 
















