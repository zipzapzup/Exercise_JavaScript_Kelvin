function anyThing() {
    setTimeout(() => {
        console.log("Test!")
        const x = "Some random variable";
        return x
    }, 2000);
}

anyThing()
console.log("Helo")


// Hello will print first, and then Test!
// Example of callbacks

// Asynchronous function or operations is the act of executing the requests in the background. As JavaScript is only single-threaded, any operations that requires a certain time will block the execution of the entire operations.

// In here asynchronous will make it feel as if JavaScript is multithreaded. One example is a setTimeout function, in which a timer runs in the background and will execute the function once certain time has run.

// Any data that is called back will only be reliable inside the function. Of course, we can return it.



// Promises in JavaScript

// Not iPromise is a variable consisting of a promise, which means it is a callback that will resolve after the function setTimeout has execute and that resolve has been executed.
// A promise takes 2 argument, a resolve and a reject state in which you can define in the argument.
// Note A resolve is a successful operations.
// Note A reject is not a successful operations.
// In this example, i set the resolve to be called in 5 seconds, where as reject is 4 seconds. Callback from this promise will only execute reject.
let iPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("IPromise Success !");
    }, 5000);
    setTimeout(() => {
        reject("Reject IPromise Reject !")

    }, 4000);
})

// After the promise has been executed, then we can call  then function to pass the message to console. Then function handles the callback.
    iPromise.then( message => {
        console.log(message, "YeAH");
    })
    .catch(err => {
        console.log(err)
    })
    .finally(() => {
        console.log("Always EXECUTE")
    })

iPromise

// Async and Await Operations
//