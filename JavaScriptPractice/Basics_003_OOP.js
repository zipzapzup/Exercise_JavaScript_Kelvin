// Classes in JavaScript
//
// OOP implementation in Javascript is that it uses prototypical inheritance
// In JavaScript, there are no private class variable
// Works are being worked in progress
// A Class as follows


class Person {
    // body
    constructor(name, age) {
        // constructor is a special function that is called when initialising the Class.
        this.name = name;
        this.age = age;
    }

    speak( ){
        // In a normal method of the class, it is a reference to its instance. To retrieve the properties of the instance use the this. parameter.
        console.log("I am a robot and my name is: ", this.name);
    }

    static ageDiff(person1, person2){
        // Static method is a special method that belong to the class. It doesn't belong to the instance
        return Math.abs(person1.age - person2.age);
    }

}


// Subclasses
// To create Subclasses, you will need to extend the class

class Employee extends Person{
    constructor(name, age, salary, jobTitle) {
        super(name, age);
        // super keyword here is used to refer tot he superclass properties. Name and Age is called or inherited the Person class.
        this.salary = salary;
        this.jobTitle = jobTitle;
    }
    // Note a Subclass (Employee) can override the super class method. In this case constructor method is overriden since this is the subclass (Employee) method. 

    speak(){
        super.speak() // this will speak the speak method from the super class.
        console.log("I'm a robot EMPLOYEE paid:", this.salary, " title: ", this.jobTitle);
    }

}

let Henry = new Person("Henry", 45);
let John = new Person("John", 20)

console.log(Henry.name, Henry.age)
Henry.speak()

Person.ageDiff(Henry, John)

let Robot = new Employee("ROBOT", 20, 1, "Robot")
Robot.speak()

// You can also call a method called instanceof to check whether this instance belongs to that specific class. It returns boolean value.

console.log( Robot instanceof Employee, Robot instanceof Person)


// In reality in JavaScript there is no classes. 
// It is based on a prototype based model.
// A prototype based model is where an instance is created based on a specific class, more like a copy of the class in this instance.
// In Java, a class is created in a sense where it is a category of objects. In JavaScript its like a copy.

let person3 = Object.create(Person);
// object.create is used to create a child from the protoype object. A copy of it.
let anotherperson = Object.create(Person);
// this means that person3 and anotherperson is a child of the Person prototype object. It has all the properties, method of the Person.
// In A prototype, if you make changes on the prototype person object, all object will share the changes as it is a copy. If the original prototype is changed, the other prototype of the class will change. 



//THIS Keyword
// this keyword refers to the current execution context, when you define this in a function, it will show the properties of the object or instance that is called for.
// for example:

let introduce = function (){console.log( `hi, it is ${this.name}`)};

let sample = {
    name: "Bob",
    age: 18,
    introduce
}

sample.introduce()