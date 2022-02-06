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
    
} else if (true ) {
    
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
// A) FOR Loop
for (let i = 0; i < 5; i++) {
    console.log(i)
};

// B) FOR OF
// Loop through each item of the array
let loop1 = 'abc';
for (let i of loop1) {
    console.log(i)
}

// C) FOR IN 
// Loop through each key of an object.
let person = {
    name: "John",
    age: 30,
    interests: ['music','food']
}

// D) FOR EACH
// Loop through each object and you can pass in a function
arr = [1,2,3]
arr.forEach( function(x){console.log(x);});

// CONTROL FLOW 4: WHILE Statements
// 2 types of while loop
// A) While Loop 
// B) Do-While
// These 2 while loop is different in that the while loop checks the condition at the start, whereas the do while loop check conditions at the end.
let cond1 = true;
let cond2 = 0;
while (cond1) {
    if (cond2 == 5){
        cond1 = false;
    }
    console.log("While Loop:", cond2)
    cond2++
}

do {
    console.log("DO-WHILE LOOP")
} while (false);

// CONTROL FLOW 5: Handling Errors TRY statements
// Try Statement is used when you need to anticipate some errors.
// Normally, you would need to use a try statements when you are dealing with network requests, or file which the outcome of the requests is undefinite and can fail.

try {
    // code
    throw "AHA, you met an ERROR!"
} catch (err) { // err is a variable on the error message
    console.log(err)
} finally {
    console.log("Finally always execute Regardless of Error")
    // what to do finally
}

// Note that you have situtation where you can throw your own errors, and that is you can use a throw statement to throw your own errors. This throw will become the error variable.

// CONTROL FLOW 6: Switch Case
// Switch is used when you have multiple case, rather than lots of if statement.

let answer = 'a';

switch(answer) {
    case "a":
        // 
        break;
    case "b":
        break;
    case "c":
        break;
}

// CONTROL FLOW 7: Ternary operators
// An operator to execute of many if statements in a shorter way.
let ternary = true ? console.log("Execute when True"): console.log("Execute when false");


// VAR and LET is on different scope
function myFunction(){
    var x = "function scoped!";
    let y = "block scoped!";
    console.log(x);
    console.log(y);
}

myFunction();

// console.log(x) VAR IS Function scoped, since the var is only available inside the function. Outside the function, x is not defined and running this command console.log9x) will show error.

// Note that an if statement is not a function.

if (true){
    var z = 'variable z still exists outside since if is not a function';
    console.log(z);
}
console.log(z)