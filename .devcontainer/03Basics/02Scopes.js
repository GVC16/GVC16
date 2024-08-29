let a = 10;
const b = 20;
var c = 30; 

if (true) {
    let a = 100;
    const b = 200;
    var c = 3000; // global effect
    // console.log("Inner: ", a);
    
}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "hitesh";
    function two(){
        const website = "youtube";
        //console.log(username);
        
    }
    //console.log(website);
    two();
}
one();


//*************************************************************************************

if(true){
    const username = "Gaurav";
    if (username === "Gaurav") {
        const website = "youtube";
        //console.log(username + website);
    };
    //console.log(website);
};
//console.log(username);

//********************Interesting********************************
addOne(5);

function addOne(num){
    return num + 1;
};
console.log(addOne(5));


addTwo(5); 

const addTwo = function(num){
    return num + 2;
};
