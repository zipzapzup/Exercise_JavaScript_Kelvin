const fs = require("fs");

fs.writeFile('hello.txt', 'hello world there', (err) => {
    console.log('Completed');
});



