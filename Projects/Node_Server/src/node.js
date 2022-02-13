// Node Server JS

// npm init -y
// npm install express
// npm install @babel/core @babel/node
// npm install body-parser
// npm start
// npm install nodemon (After restart it saves it)
import express from 'express';
import { people } from './people.js';
import { promises as fs } from 'fs';
import bodyParser from 'body-parser';
// fs package is synchronous
// Reading files is an async function
// It uses promises

let app = express();

// After defining app, app.use is a plugin
// BodyParser takes the extra argument from the request and places it in the request
app.use(bodyParser.json());

app.listen(8888,  () => {
    console.log("Server is listening on port - 8888")
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

// app.get('index', handler function)
app.get('/file-data', async (request, response) => {

    let data = await fs.readFile( new URL( 'people-data.json', import.meta.url));
    // __dirname is the absolute path of node.js
    // You need to call await to fs.readFile since it is an async function that returns a promise. Handle the callback in 3 different state: Pending, Accepted, Rejected.
    let people = JSON.parse(data);
    response.json(people);
    // JSON Parse converts string to JSON Object


});


app.post('/people', (request, response) => {
    let newPerson = request.body;
    people.push(newPerson);
    response.json(people);
    i++;
    console.log("POST Requests Received ", i)
});

// Node what to do: add the JSON object and Write to FILE.