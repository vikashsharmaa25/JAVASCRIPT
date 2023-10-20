const fName = "Vikash";
const lName = "Sharma";

console.log(fName + lName);
console.log(`${fName} ${lName}`);

// another way to decalare String

const gameName = new String("vikash");
console.log(gameName[0]);
console.log(typeof gameName); // Object
console.log(gameName.length); // 6 (length of our String)
console.log(gameName); // Origin Value
console.log(gameName.toUpperCase()); // origin value not change
console.log(gameName.toLocaleLowerCase()); // origin value not change

console.log(gameName.charAt(2)); // this gives me the what character is in index number 2
console.log(gameName.indexOf("k")); // this gives me the index number of "k"

console.log(gameName.substring(0, 4)); // it return 0 to 3 index number chacter and subString start count only from 0 index

const newString = gameName.slice(-5, 4); // it give count from first as well as last index
console.log(newString);

const newStrignOne = "               vikash            ";
console.log(newStrignOne);
console.log(newStrignOne.trim()); // it remove the extra spaces

const url = "sharma9422@gmail.com";
console.log(url);
const newUrl = url.replace("sharma", "vikash"); // sharma replace by vikash
console.log(newUrl);
