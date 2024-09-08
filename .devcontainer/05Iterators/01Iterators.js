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





















































































































