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

// LET is block-scoped
// LET: Is a method to declare variables, which is block scoped that is bounded by {}. A variable that is declared in block with `let` is only available in use within block.

// VAR is function scope
// VAR: Let you define a variables and reuse the variables, throughtout your code blocks. It is generally loaded under the hoisintg rule, Where all Var command are loaded first into memory before function execution. Hoisting rules states that all declaration are loaded first before runtime, this menas that var's positioning affect how it is declared. Avoid VAR

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

// NUMBER
// In javascript, you can define a number as a fraction, decimals, negative and even zero
// Number can be defined with Hex, Binary types as well
// NaN is not a number - error when you multiple number with not a number

let num1 = -30;
let num2_hex = 0x2A; // Hexadecimal numbers starts with 0x
let num3_bin = 0b10101; // Binary numbers
let num4_octal = 0o52; // Octal numbers
let num5_scien = 6e7; // Scientific numbers: 6* 10^7 - sixty million

console.log(x + y)
console.log(z, myVar, myConstant)