// Built in

// Object.keys()
// Object.values()
// Object.entries()


let myObj = {
    a: 1,
    b: 2,
    c: 3
}

console.log(Object.keys(myObj))
console.log(Object.values(myObj))
console.log(Object.entries(myObj))
// Once you have the keys, you can do sort or filter them. Whilst you can do a loop and print the keys, this method is more efficient.


// We have an Object.Assign method, where you can add multiple object. If you add an object together, the properties of the 2nd object will be added to the first one. If name properties is already defined, then it will skip it.

let person1 = {
    name: "JOHN",
    age: 1
}
let person2 = {
    lastname: "Doe",
    name: "SKIL"
}
Object.assign(person1, person2)
console.log(person1)

// To create a copy of an object
let person3 = Object.assign({}, person1)
console.log(person3)




// BUILTIN Array functions.

let nums = [1, 2, 3, 4,5];
nums.push(1)
console.log(nums)
nums.pop()
console.log(nums)

// array.splice(startIndex, How many elements to remove, Elements to Add)
nums.splice(2,1) // remove 1 element on index 2
nums.splice(2,0,100) // add 1 element to index 2 value 100
nums.splice(0,2, "one", "two") // this will delete first 2 elements and add it with "one" and "two"
console.log(nums)


console.log(nums.indexOf(100))

nums.find(function(x) {
    return x > 3;
}) // return the first element that is greater than 3
// Note that FIND function need to return false or true
console.log(nums)

nums = nums.filter(function(x){
    return x > 4;
})
console.log("After filter",nums)
// Filter function need to return true or false


// Any array that is called for using the function, it is not mutated.
numbers = [1,2,3,4,5]
numbers.map( function(x){ return x * 2})