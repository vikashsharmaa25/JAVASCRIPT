// Singleton ==> contructor method ke trough singleton banta hai
// Object.created aaise banta hai constructor method

// now i start object literal

const User = {
  name: "vikash",
  age: 21,
  address: "Kanpur",
  isEmail: "vikash9422@gmail.com",
  isLogged: false,
};

console.log(User);
console.log(User.isEmail); // both are same for access the object element
console.log(User["isEmail"]); // both are same for access the object element

// if i want edit email
const newEmail = (User.isEmail = "sharmajee@gmail.com");
console.log("new email is : " + newEmail);

// ============= InterView Questions Important ========================= //

const object = {
  "full name": "vikash sharma",
};

// the question is how to access { full name }

console.log(object["full name"]); // by this method i access this full name this method name is square notations

const mySymb = Symbol("mySymb1");

const symboleUse = {
  [mySymb]: "this is use of symbole",
};
console.log(symboleUse[mySymb]); // this way to access or use Symbole

const object1 = { 1: "a", 2: "b" };
const object2 = { 3: "a", 4: "b" };

const object3 = { ...object1, ...object2 };
console.log(object3);

// if i want to take a all keys from particular object
console.log(Object.keys(User)); // [ 'name', 'age', 'address', 'isEmail', 'isLogged' ]

// if i want to take a all value from particular object
console.log(Object.values(User)); // [ 'vikash', 21, 'Kanpur', 'sharmajee@gmail.com', false ]
