"use strict"; // treat as new javascript
console.log(typeof null)

let score = 23;
console.log(typeof score);

// 1. string to number conversion //
let age = "12";
const newAge=Number(age);
console.log("string to number conversion: ",typeof newAge);
console.log("new age: ", newAge);

let name = "sayali";
const firstName = Number(name);
console.log("FirstName: ", firstName)

// 2. number to string conversion //
let newNum = 33;
let stringNum = String(newNum);
console.log("stringNum",stringNum);
console.log("Type of stringNum: ", typeof stringNum);

// 3. Boolean to number //
console.log(Number(true));
console.log(Number(false));

// 4. Boolean conversion //
// 1 ==> true
// 0 ==> false
// "" ==> false
// "sayali" ==> true