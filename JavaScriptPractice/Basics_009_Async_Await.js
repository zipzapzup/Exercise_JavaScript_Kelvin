// Async function
// Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

// How Asynchronous function works is that you need to define a function with the async at the start. After defining the async, then inside the function you can run await inside the function. 
// await and async enables promise-based behaviours.
// 
// In this case, the call() function is an asynchronous function. Inside the function, the result variable is assigned with an await of how the promises in result will be treated.
// Promises in result will be treated as console.log(result) once successful, and if errors out it will catch it and finally statement always execute.
// Remember that in Promises, there are 3 state: PENDING, RESOLVED and REJECT.
function executeafter3second(){
    return new Promise( resolve => {
        setTimeout(() => {
            resolve("Print this Resolve");
        }, 3000);
    });
};

async function call() {

    try {
        console.log("Start Async Function - Calling");
        let result = await executeafter3second();
        console.log(result)

    } catch (error) {
        console.log(error)
    } finally {
        console.log("Finally Executes")
    }


}

call()