// this is paramerter
function addTwoNumber(num1, num2) {
  console.log(num1 + num2);
}

addTwoNumber(2, 5);
// this is argument

function addTwoNumber(num1, num2) {
  console.log(num1 + num2);
}

const result = addTwoNumber(2, 5);
console.log(result); // this give undefined

function addTwoNumber(num1, num2) {
  return num1 + num2;
}

const finalResult = addTwoNumber(2, 5);
console.log("final result is : ", finalResult); // this give 7

// notes ******* => if you don't pass any argument then if give undefined
// function myFun(username) {
//   return `${username} just loggedIn`;
// }
// console.log(myFun()); // empty argumnet gives undefined

// function myFun(username) {
//   if (!username) {
//     console.log("please enter username");
//     return;
//   }

//   return `${username} just loggedIn`;
// }
// console.log(myFun());

function myFun(username) {
  if (!username) {
    console.log("please enter username");
  } else {
    console.log(`${username} just loggedIn`);
  }
}
myFun();

// now this ... operater is also know as rest operator and spred opreator according to there use
// this ... rest opreator contain all argument (inifinity)
function myCart(...num) {
  return num;
}
console.log(myCart(100, 200));
