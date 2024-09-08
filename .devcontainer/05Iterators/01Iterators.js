let myArray = ["Flash", "Batman", "Superman", "Spiderman"];
//console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    //console.log(element);    
}

// Break and continue

// for (let index = 1; index <= 20; index++) {
//     //const element = array[index];
//     if (index == 5) {
//         //console.log(`5 Detected`);
//         break; // this will break the loop i.e. after 5 index, index will not increment.
//     }
//     //console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    //const element = array[index];
    if (index == 5) {
        //console.log(`5 Detected`);
        continue; // this will continue the control flow and skip the execution of code written after continue
    }
    //console.log(`Value of i is ${index}`);   
}

// While and do while loop

let index = 0;
while (index <= 10) {
    //console.log(`Value of index is ${index}`);
    index = index +2;
}

let arrayIndex = 0;
while (arrayIndex < myArray.length) {
    //console.log(`This superhero is ${myArray[arrayIndex]}`);
    arrayIndex++;
}


// let score = 11;
// do {
//     console.log(`Score is ${score}`);
//     score++;
// } while (score <= 10);

const arr = [22, 33, 44, 55, 66, 77];
for (const num of arr){
    //console.log(num);
}

const greeting = "Hello World!";
for (const greet of greeting) {
    if (greet === " "){
        continue;
    }
    //console.log(`Each char is ${greet}`);
}


 // Maps

const map = new Map();
map.set('IN', 'India');
map.set('USA', 'United States of America');
map.set('FR', 'France');
map.set('IN', 'India'); // Map do not allow duplicate entries

//console.log(map);
for (const [key] of map) {
    //console.log(key);
    
}
for (const [key, value] of map) { // this will work
    //console.log(key + ' : ' + value);
}


// const myobject = {
//     game1 : 'NFS',
//     game2 : 'Spiderman'
// }
// for (const [key, value] of myobject) { // this won't work
//     //console.log(key + ' : ' + value);
// }

const myObject = {
    js : 'JavaScript',
    cpp : 'C++',
    rb : 'Ruby',
    swift : 'Swift by Apple'
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

for (const key in arr) {
    //console.log(key);
    console.log(`${key} : ${arr[key]}`);
    
}






































































































