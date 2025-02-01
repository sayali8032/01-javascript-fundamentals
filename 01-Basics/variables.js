/*
There are 3 type of ways to declare the variables in javasccript :
1) const
2) var
3) let
*/ 

// 1. const : variables declared with const can never be changed or reassigned //
const name1 = "sayali";
// name1="abhishek" - This is invalid in case of const declaration //
console.log("Name 1 :", name1);

// 2. var : the value declared with var gets changed/updated everywhere.
// shall be never used to declare the variables as it changes the value of the declaration as well//
// variables declared with var are available throughout the function where they are declared.
function varScoping(){
    var x = 10;
    if(x==10){
        var x = 50;
        console.log("Inside the if:", x); // 50
    }
    console.log("Outside the if:",x); // value updated to 50
}
varScoping();

// 3. let : let shall be used to delcare the variables in js as its original value will not change
// after declaration. 
// Variables declared with let are only available inside the block where they are defined.
function letScoping(){
    let x = 10;
    if(true){
        let x=20;
        console.log("Inside the if:", x); // 20
    }
    console.log("Outside the if:",x); // 10 did not get updated
}
letScoping();