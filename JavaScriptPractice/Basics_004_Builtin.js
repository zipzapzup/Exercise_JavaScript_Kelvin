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


