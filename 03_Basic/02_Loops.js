// for loop
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
//   console.log(`index : ${index}  value : ${element}`);
// }

// table print
// for (let i = 1; i <= 10; i++) {
//   console.log(`outer loop : ${i}`);
//   for (let j = 1; j <= 10; j++) {
//     // console.log(`inner loop : ${j} and loop index ${i}`);
//     console.log(i + "*" + j + " = " + i * j);
//   }
// }

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = myNum.filter((num) => num > 4);
// console.log(newNum); // output : [5, 6, 7, 8, 9, 10];

// another way

const newNum = myNum.filter((num) => {
  return num > 4;
});
console.log(newNum);
