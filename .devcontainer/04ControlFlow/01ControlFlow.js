//if-else conditionals

const isUserLoggedIn = true;
if(!isUserLoggedIn){
    //console.log("Hello World!");
}
else{
    //console.log("Hello Gaurav!");
    
}

let temperature = 29;
if(temperature > 40){
    //console.log("Temp is greater than 29.");
    
}
else{
    //console.log("Temp is less than 29.");
    
};

const score = 200;
if (score >300) {
    let power = "fly";
    //console.log(`User power ${power}`);
    
} else {
    let power = "not fly";
    //console.log(power); 
}

//below: What not to do as standard practice of writing clean code although the code is correct
// if(balance > 500) console.log("test1"), console.log("Test2");

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 ==3){
    console.log("Allow to buy course");
}
if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged in");
}

/* Switch Case */
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3;
switch (month) {
    case 1:
        console.log("January");
        
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
        
    default:
        console.log("Default executed");
        
        break;
}

const day = "Tuesday";
switch (day) {
    case "Monday":
        console.log("Monday");
        break;
    case "Tuesday":
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thusrday");
        break;
        
    default:
        console.log("Default executed");
        break;
}









