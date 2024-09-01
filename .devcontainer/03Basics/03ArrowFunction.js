const user = {
    username: "Gaurav",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website!`);
        console.log(this); // will give "user" object
        
    }
}
// user.welcomeMessage();
// user.username = "Hitesh";
// user.welcomeMessage();
// console.log(this); // will give empty object

// function chai() {
//     let username = "Gaurav";
//     console.log(this.username); // will give undefined, this keyword works with object 
    
// }
// chai();

// const chai = function () {
//     let username = "Gaurav";
//     console.log(this.username); // will give undefined, this keyword works with object 
    
// }
// chai();

// const chai =  () => {
//     let username = "Gaurav";
//     console.log(this.username); // will give undefined, this keyword works with object 
    
// }
// chai();

/* Explicit Return of Arrow Function */
// const addTwoNumbers = (number1, number2) => {
//     return number1 + number2;
// }
// console.log(addTwoNumbers(4, 5));


/* Implicit Return of Arrow Function */
// const addTwoNumbers = (number1, number2) => number1 + number2;
// const addTwoNumbers = (number1, number2) => (number1 + number2);
const addTwoNumbers = (number1, number2) => ({username: "Gaurav"});
console.log(addTwoNumbers(4, 5));






















