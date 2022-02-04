// Control Flow
//

// CONTROL FLOW 1: EQUAL SIGNS
// In JavaScript, there are 2 ways of equal signs.
// Equality can be used in two different ways.
// 
// double equals ==
// Doesble equal only check whether the two value is the same, ignoring the type.
let result1 = 1 == "1"; 
let result2 = 10 == 10n;
console.log(result1, result2) // true true

let result5 = 0 == "0"; 
let result6 = 0 == "";
let result7 = 0 == [];
console.log(result5, result6, result7) // true true edge cases - you can compare 0 to emtpy string, and empty array.

let result11 = 0 == null; 
let result12 = 0 == undefined;
console.log(result11, result12) // false false, as 0 is not null and 0 is not undefined.

let result13 = "true" == true;
let result14 = "false" == false;
console.log(result13, result14) // false false, as boolean is different. 

// triple equals ===
// A triple equals check whether the value is of the same type and also the same value
// AS A GENERAL RULE, use triple equal and convert the value to the same. If string, convert it to Number using Number function
// For example:

let result20 = 5 === Number("5");


let result3 = 1 === "1";
let result4 = 10 === 10n;
console.log(result3, result4) // false false



// Comparing objects
// To compare objects, you need to use triple equal signs. If the objects are referenced the same / identical, then it will return true. However, if objects are created differently, it will not.

let Obj1 = {
    Name: "John"
};

let Obj2 = {
    Name: "John"
}

let Obj3 = Obj2;

let result30 = Obj1 === Obj2; // false as not same reference and not identical
let result31 = Obj2 === Obj3; // true as it is referenced the same.



// CONTROL FLOW 2: IF Statements
// If statements is a control flow operator, which will execute the block code {} if it is true. You can use comparison operator to get boolean which will show the results.
// Format of IF statements are as follow
if (true) {
    continue
} else if {
    continue
};

// Note that there are a few variations on Boolean. You can use comparison operators or straight on empty values as false.
// As a rule of thumb if the value is empty or 0, then it is false. If there are value, then it is true.

// Values which JavaScript interpret as false in boolean.
// 1. ""
// 2. 0
// 3. 0n
// 4. NaN
// 5. undefined
// 6. null
// 7. false

Boolean([])     //false
Boolean("")     //false
Boolean(0)      //false
Boolean("1")    //true
Boolean(19)     //true
Boolean([1,2])  //true

Boolean(NaN)    //false
Boolean(null)   //false
Boolean(undefined)// false

let bool1 = 5 < 2; // false - not it is possible to use greater than function to see the value of bool1

// in addition you can also use AND, OR and NOT operator.
// AND = &&
// OR = ||
// Not = !


//CONTROL FLOW 3:FOR Statements
//
//
//