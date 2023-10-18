const accountId = 12345;
let accountEmail = "vikash942@gmail.com";
var accountPassword = "11111";
accountCity = "jaipur";

let test; // it show the value of test is : undefine becouse we not define any value for test

// accountId = 6789; not allowed becouse use const variable on top
// console.log(accountId);

accountEmail = "akash123@gmail.com"; // changed becouse use let variable on top
console.log(accountEmail);

accountPassword = "98765"; // changed becouse use var variable on top
console.log(accountPassword);

accountCity = "noida"; // this is possible in javascript but please don't use like this , this is bad practices
console.log(accountCity);

// now if i want to console all in one console so i used i this
console.table([accountId, accountEmail, accountPassword, accountCity, test]);

/* 
note 1) ==> what is scope in javascript
ans ==> curly bracket {} is known as scope in javascript

note 2) ==> prefer not to use var varibale
ans ==> becouse of issue in block scope and functional scope,
*/
