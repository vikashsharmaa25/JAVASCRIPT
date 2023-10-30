// const promisesOne = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log(`this is setTime out function`);
//     resolve();
//   }, 1000);
// });

// promisesOne.then(function () {
//   console.log(`promises resolve`);
// });

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log(`another method for promises`);
//   }, 1000);
//   resolve();
// }).then(() => {
//   console.log(`promises resolve`);
// });

// ================== BY ASYNC AWAIT =============================//

// const getAllStore = async () => {
//   try {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getAllStore();

// ======================== BY .THEN and .CATHCH ============================== //

const response = fetch("https://fakestoreapi.com/products");
response
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
