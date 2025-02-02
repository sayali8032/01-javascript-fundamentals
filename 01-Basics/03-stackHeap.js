"use strict";

// Stack : all primitive datatypes are stored in stack //
// in stack, it creats copy of the variable, hence the original value does not gets changed //
let firstName = "sayali";
let lastName = firstName;
lastName="chitale";

console.log("firstname",firstName);
console.log("lastname", lastName);


// Heap : all the non primitive datatypes are stored in the heap //
// Heap creates reference of that object hence the original value also gets altered //
let object1 = {
    firstName:"Sayali",
    lastName:"Chitale"
}

let object2 = object1; // reference is given hence changes the original value

console.log("Object 1:", object1);
console.log("Object 2:",object2);