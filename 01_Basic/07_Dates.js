let myDates = new Date();
console.log(myDates.toString()); // Mon Oct 23 2023 21:46:17 GMT+0530 (India Standard Time)
console.log(myDates.toLocaleDateString()); // 10/23/2023
console.log(myDates.toJSON()); // 2023-10-23T16:16:46.640Z

console.log(myDates.toLocaleTimeString()); // 9:47:07 PM best way

console.log(typeof myDates); // so now date is a object

// ===================== month start from 0 index in javascript ============================= //

console.log(Date.now());
console.log(Math.floor(Date.now() / 1000)); // by deviding date.now by 1000 it become in second

const newDate = new Date();
console.log(newDate);

console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getHours());
console.log(newDate.getTime());
console.log(newDate.getFullYear());
