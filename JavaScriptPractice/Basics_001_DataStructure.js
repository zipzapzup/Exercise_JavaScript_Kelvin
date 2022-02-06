// Start of Practice 2022
/*
    Recall and Short Practice Again
*/

let x = 5;
let y = 10;

// JavaScript Declaration How To:
// 1. LET
// 2. VAR
// 3. CONST

// COMPARISON:
//  LET             VAR
//  Block {}        Function ()
//  No redeclare    ReDeclare
//  No              Global Objects
for (var i = 0; i < 5; i++) {
    console.log("VAR Inside Loop:", i);
} 


for (var i = 0;i < 5; i++){
    console.log("VAR Inside Loop:", i);
}
console.log("VAR outside loop: ", i)

// LET is block-scoped {}
// LET: Is a method to declare variables, which is block scoped that is bounded by {}. A variable that is declared in block with `let` is only available in use within block.
// LET cannot be re-declared, however the value is mutable. 

// VAR is function scope (hoisting)
// VAR: Let you define a variables and reuse the variables, throughtout your code blocks. It is generally loaded under the hoisintg rule, Where all Var command are loaded first into memory before function execution. Hoisting rules states that all declaration are loaded first before runtime, this menas that var's positioning affect how it is declared. 
// When used in global scoped, VAR becomes global variable.
// VAR can be re-declared. Act like a global variable.

// CONST is a variable that is constant and cannot be changed
// CONST: When declaring a CONST, the value cannot be re-declared or re-assigned. This means that an object that is declared as a CONST is immutable, its properties cannot be changed.
var z = 5; 
let myVar = "Hello World";
const myConstant = 101;


// 8 DATA Types. To check data type use "typeof"
//      - Numbers
//      - Strings
//      - Booleans
//      - Objects
//      - Functions
//      - Undefined
//      - Bigints
//      - Symbols

console.log(typeof(x))

// 1. NUMBERS
// In javascript, you can define a number as a fraction, decimals, negative and even zero
// Number can be defined with Hex, Binary types as well
// NaN defines as not a number - error when you multiple number with not a number
// Infinity is when the number goes into infinity 10 / 0 
// All number values are stored as 64 bit floating points. Big numbers are accurate to 15 decimals.
// Don't compare decimals. Use math.round as it is inaccurate.

let num1 = -30;
let num2_hex = 0x2A; // Hexadecimal numbers starts with 0x
let num3_bin = 0b10101; // Binary numbers
let num4_octal = 0o52; // Octal numbers
let num5_scien = 6e7; // Scientific numbers: 6* 10^7 - sixty million



// 2. STRING
// String is defined by putting quotes.
// String has the following native methods
// - str.charAt(1)
// - str.length
// Using backtick allow you to do string substitution
// Backslash is used as an escape function


let string1 = 'Hello!' + ' Hi';
let string2 = 'Hello2!';
let sentence = `${string1} John`;
let string3 = 'I\'m';
console.log("String: ", string1, string2)
console.log(typeof string1)

// 3. BOOLEAN
// Boolean consists of two values: true or false
// Boolean can also come as a result of comparison operator.
// All other value can also turn into boolean
// string = '';
// if (string) { } 
// in here empty string is false 
// 0 is equal to false
// 0n is equal to false  [ a big int object. In JavaScript, the highest integer that is available is 2^53 -1. Which is the MAX_SAFE_INTEGER constant]
// NaN is equal to false
// null is equal to false
// undefined is equal to false
// 0n is equal to false

let bool1 = true;
let bool2 = false;
let bool3 = 4 > 5;


// 4. OBJECT
// 
// JavaScript Objects are assigned by reference
// Object is defined in memory and there is a reference to it

let object1 = {
    name: "Jane Doe",
    age: 40,
    Language: "English"
};

console.log(object1.name, object1.age, object1.Language)

let object2 = {
    a: 1,
    b: 2
};
let object3 = object2;
// object3 is a reference to object2
// changing object3 will change the property of object 2
// If a variable is already defined beforehand, you can assign it using a shortcut
let any1 = 5;
let any2 = 10;
let object4 = {
    any1,
    any2
}
// You can assign an object as null if the data is empty. If you run typeof object, it will show as object
// NUll value is considered to be an object


// 5. ARRAYS
//  [1 , 2 ,3 4, 5, 6, 7, 8, 9, 10]
// Arrays are ordered collection of values
// You can mix arrays with strings, numbers
// Arrays is actually considered object
// Array have built in methods.
typeof [1,23,45, 5]
let arr1 = [
    "zero",
    "one",
    "two",
    "three"
]
arr1.push("four");  // push method adds an element at the very end of the array
arr1.pop(); // take the last element from the end of array
arr1.indexOf("zero");
arr1.sort();
arr1.filter(x => typeof x == 'number')
arr1.map(x => x.toUpperCase());

console.log( "Array are", arr1[0], arr1.length)
console.log(x + y)
console.log(z, myVar, myConstant)


// 6. FUNCTIONS
// Function can be defined as reusable of code that take argument and return some value.
// Any function that is defined using function add(){} at the start it is hoisted. Which means the function is loaded at runtime.
function add(x,y ) {
    return x + y;
}

// 7. UNDEFINED
// Undefined type in Javascript
// It means that a variable doesnt exist or does not have any value.
// typeof bananaz;  = undefined
// In an object, an undefined can show up when the properties doesnt exist
// In an array, undefined can show when the object doesnt exist in the index.
// In a function, undefined can show when a function doesnt use a return value.
// undefined -> default value for variables before it has been declared or assigned.
// null on the other hand is when its specifically defined as null. It usually means that for example if age is not placed by the user, we can place it as null. It means that they do have an age but we dont know it yet.


// 8. BigINT
// Big numbers in JavaScript can be inaccurate, specially when numbers is too large. 2^53 -1.
// To make up for it we can use big int.
// big int is when you add n at the end of the numbers.
let bigINT = 123912123912n;
let bigInt2 = 10n + 2n;  // 12n
let bigInt3 = 10n + BigInt(10) // 20n

// Division in big int will not show decimals

// 9. SYMBOLS
// Two distinct symbils will never be equal to each other.
// It will only be equal if the reference is pointing to the same reference.
// symbil are used to avoid value clashes
// For example:

let shirt = {
    size: "Medium"
};
let sizeSymbol = Symbol("size");
shirt[sizeSymbol] = 11;