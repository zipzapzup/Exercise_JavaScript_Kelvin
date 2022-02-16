const fs = require("fs");

const args = process.argv.slice(2);
const name = args[0]

fs.writeFile(`hello${name}.txt`, `hello world there ${name}`, (err) => {
    console.log('Completed');
});



