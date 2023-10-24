// {} this curly bracket is known as scope  .... with if else or function etc ...

// disadvantage of var keyword

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

//console.log(a); // this both gives error becouse ye {} iss scope ke bahar nahi jaa skte aaise
//console.log(b); // this both gives error becouse ye {} iss scope ke bahar nahi jaa skte aaise

console.log(c); // but this print c {} iss scope ke bahar bhi access ho raha hai

// =============>> code inside the {} curly bracket is know as block scope
// and

// ==============>> scode outside the {} curly bracket is know as globle scope
