let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // Date is an Object

// let myCreatedDate = new Date(2024, 1, 23);
// console.log(myCreatedDate);

// let myCreatedDate = new Date(2023, 5, 20, 7, 8, 0);
// console.log(myCreatedDate);

let myCreatedDate = new Date("2023-03-10");
console.log(myCreatedDate.toLocaleString());

let myDateFormat = new Date("10-31-2023"); // dd-mm-yyyy is invalid in JS
console.log(myDateFormat.toLocaleString()); // give mm-dd-yyyy with 12:00:00 AM

let myTimeStamp = Date.now();
// bellow two time can be compared as a test condition
console.log(myTimeStamp);
console.log(myDateFormat.getTime());

console.log(Math.floor(Date.now()/1000)); // this will give total sec upto this date

let myDate2 = myDate.toLocaleString('default',{
    weekday: "long"
 })
 console.log(myDate2);
 



