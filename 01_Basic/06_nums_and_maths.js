const number = 100;
console.log(number);

const newNumber = new Number(100);
console.log(newNumber);

const stringNumber = newNumber.toString();
console.log(stringNumber);
console.log(typeof stringNumber);
console.log(stringNumber.length);
console.log(newNumber.toFixed(2));

// ******************************* MATHS **************************************** //

console.log(Math);
console.log(Math.abs(-4)); // means negative become positve value

console.log(Math.round(4.33)); // item become round the value
console.log(Math.ceil(4.2)); // means it become 5 it give always forward number
console.log(Math.floor(4.6)); // measn it become 4 it give always lower number means not count decimal

console.log(Math.max(2, 4, 3, 6, 8)); // its give maximun value
console.log(Math.min(2, 4, 3, 6, 8)); // its give minimum value

console.log(Math.random());
console.log(Math.floor(Math.random() * 10) + 1); //

const min = 10;

const max = 20;

const answer = Math.floor(Math.random() * (max - min + 1) + min); // important
console.log(answer);
