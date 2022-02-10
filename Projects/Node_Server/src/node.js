// Node Server JS

// npm init -y
// npm install express
// npm install @babel/core @babel/node
// npm start
import express from 'express';
import { people } from './people.js';

let app = express();
app.listen(8888,  () => {
    console.log("Server is listening on port 8888")
})

// Endpoint hello 
// Takes 2 argument, requests and response 
// Display the statistics
// Client Code: Powershell for ($i=1; $i -le 100; $i++) { curl http://localhost:8888/hello | select -expandproperty "StatusCode"}
let i = 0;
app.get('/hello', (request, response) => {
    response.send('Hello There');
    i++;
    console.log("Hello is hit", i);
})

app.get('/people', (request, response) => {
    response.json(people);
    i++;
    console.log("People JSON is retrieved", i)

})

app.get('/people/:name', (request, response) => {
    // requests object contains the name as part of the variable
    // Can use ES6 Object Destructuring syntax same as line 37
    // let { name, age } = request.params; 
    let name  = request.params.name;

    // Now find the person where the name is true
    // Person contains the result
    let person = people.find( x => x.name === name);
    response.json(person);
    i++;
    console.log("People Found:", name, " Count:", i)
})