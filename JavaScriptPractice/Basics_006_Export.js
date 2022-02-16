// export let numbers = [1,2,3,4,5];
// export function sayHi(user) {
//     console.log(`Hello, ${user}`)
// };

// in newer version, turn node js to use module in the package.
// Also, you need to set export defaults 
// Or export function hello (){console.log("HELO")}

function hello(){
    console.log("HELLO")
}

module.exports.hi = hello;
module.exports.name = 'ANY STRING';
