let score = "33";
console.log(typeof score);

// now we change string to number by this methods

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

console.log("======== second logic ===========");

let test = "44abc";
console.log(typeof test);

let valueInNumberConvert = Number(test);
console.log(typeof valueInNumberConvert);

console.log("=========== but ==========");

console.log(valueInNumberConvert); // it show NaN  means not a numbmer

console.log("========  third logic ===========");

let num = null;
console.log(num); // its gives null

// "33abc" -> NaN

// ********************* OPERATIONS ***************************** //

let value = 3;
let negValue = -value;
console.log(value);
console.log(negValue);

let str1 = "vikash";
let str2 = " sharma";
console.log(str1 + str2);
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");

console.log("1" + 2 + 2); // this print 122
console.log(1 + 2 + "2"); // this print 32 why becouse this is rule

console.log(""); // print space
console.log(+""); // print 0
