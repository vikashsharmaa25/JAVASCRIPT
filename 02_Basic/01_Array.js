// Array conatain mixed of diffrent data types
const myArray = [0, 1, "vikash", "sharma", 5];
console.log(myArray);

myArray.push(6);
console.log(myArray);

const array = [1, 2, 3, 4, 5, 6];
console.log("original array " + array);

const sliceArray = array.slice(0, 3);
console.log("original array " + array);
console.log(sliceArray);
console.log("original array " + array);

const spliceArray = array.splice(0, 3);
console.log("original array " + array);
console.log(spliceArray);
