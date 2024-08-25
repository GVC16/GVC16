// Singleton: objects created from constructor

// Object.create

// Object Laterals:
const mySymbol = Symbol("key1");

const myUser = {
    name: "Hitesh",
    age: 18,
    [mySymbol]: "myKey1",
    location: "Bangaluru",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Saturday"]
}; 
// console.log(myUser.email);
// console.log(myUser["age"]);
// console.log(typeof myUser[mySymbol]);
//Object.freeze(myUser);
//myUser.email = "gaurav@google.com";
// console.log(myUser);

//****************************************************************

myUser.greetings = function(){
    console.log("Hello my User!");

};
// console.log(myUser.greetings()); // giving Function (anonymous)

myUser.greetings2 = function(){
    console.log(`Hello my User ${this.name}`);  
};
// console.log(myUser.greetings2());

//***********************************************************

//const instaUser = new Object(); // will create an empty object
//console.log(instaUser); 

const instaUser = {};

instaUser.id = "123abc";
instaUser.name = "Samay";
instaUser.isLoggedIn = false;

// console.log(instaUser);

const regularUser  ={
    email: "someone@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Vikas",
            lastname: "Choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const object1 = {
    1: "a",
    2: "b"
};
const object2 = {
    3: "c",
    4: "d"
}
//const object3 = {object1, object2}; // incorrect way
//const object3 = Object.assign({}, object1, object2);

const object3 = {...object1, ...object2}
// console.log(object3);

const users = [
    {
        id: 1,
        email:"h@gmail.com"
    },
    {
        id: 2,
        email:"g@gmail.com"
    },
    {
        id: 3,
        email: "b@yahoo.com"
    }
]
// console.log(users[1].email);

// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));
// console.log(instaUser.hasOwnProperty('isLoggedIn'));

//*******************************************************************************************************************

const course ={
    courseName: "JS in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
};
//course.courseInstructor // this is one way to extract the object properties

const {courseInstructor: instructor} = course;
console.log(instructor);

//JSON:
/*
{
    "courseName": " JavaScript in Hindi",
    "instructor": "Hitesh",
    "price": "free"
}
*/
[
    {},
    {},
    {}
]



