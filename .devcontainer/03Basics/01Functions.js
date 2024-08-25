/*
function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
    
};

const result = addTwoNumbers(3, 4);
console.log(result); // will give undefined because function is not returning anything

*/

function addTwoNumbers(number1, number2){
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
};

const result = addTwoNumbers(3, 4);
// console.log(result);


function loginUserMessage( username = "Gaurav"){ //here "Gaurav" given as default value
    return `${username} just logged in`;
}
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){ // "..." is called rest operator here
    return num1;
};
console.log(calculateCartPrice(100, 200, 400, 2000)); // returns the array of [400, 2000] because num1 returning this


const user = {
    username: "Gaurav",
    price: 199
};
function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
};
handleobject(user);

const myNewArray = [200, 400, 100, 600];

function   returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));





