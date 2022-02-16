// import {sayHi, numbers} from 'Basics_006_Export';

// sayHi('John')
// Named imports and exports

// In ES6 you can use IMPORT
// import hello from "./Basics_007_Exports.js"

const fib = require('./Basics_006_Export');

console.log(fib.name);

fib.hi();