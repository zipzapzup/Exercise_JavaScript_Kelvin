// Anything else


// Arrow Functions
// Allow you to define a function using var, let or const function. Functions that are defined by arrow key are not hoisted.
// A normal way to define function
function myFunction() {
    //
};

// Using arrow function
let myArrow = (arg1, arg2) => {console.log("Arrow Function")}

myArrow()

let myArrow1 = arg1 => {console.log(arg1 * 2)};
myArrow1(10)

let myArrow2 = () => {console.log("Hello World - no Arguments")};

myArrow2()


// default arguments
// if you want to skip and trigger default argument, pass in undefined
function Args1( x = "Hello", y = 5){
    console.log(x, y)
    //
}

Args1(undefined,100)


// Spread operator
// By using ... dots and the object name, you can use the spread operator to take the properties from the other object. You will get the properties and value in the case of combined contains person1 and person2
// Any object that is on the last will overwrite the first object.
// Spread object is used to spread the elements and combine it together.
let combined = {
    ...person1,
    ...person2
};

let arr1 = [1,2,3];
let arr2 = [ 4,5 6];

let combarr = [
    ...arr1,
    ...arr2
]