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
