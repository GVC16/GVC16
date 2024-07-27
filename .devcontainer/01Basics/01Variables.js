const accountId = 27615;
let accountEmail = "deargaurav@gmail.com";
var accountPassword = "winterIsComing2024";
accountCity = "Dehradun";

// accountId = qw34798; //referenceError, not allowed because of const data type
console.log(accountPassword);

accountEmail = "deargaurav@yahoo.com";
accountPassword = 1357924680;
accountCity = "Manali";
let accountState;

/*
prefer not to use VAR
because of issue in Block Scope and Functional Scope.
*/
console.log(accountEmail);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


