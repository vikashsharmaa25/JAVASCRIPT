const firstArray = ["vikash", "akash", "ankit"];
const secondArray = ["nidhi", "pooja", "savita"];

// firstArray.push(secondArray);
// console.log(firstArray);

// firstArray.concat(secondArray);
// console.log(firstArray);

const allArray = firstArray.concat(secondArray);
console.log(allArray);
// now import .concat return a new aaray

// concat or merge two array using spred operator
const newAllArray = [...firstArray, ...secondArray];
console.log(newAllArray);

console.log(Array.isArray("vikash")); // false ye aarray nahi hai
console.log(Array.from("vikash")); // ye arrray bana diya

const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log(Array.of(score1, score2, score3)); // its make aarray
