import { createMultiplicationTable } from './generateTable.js';

let args = process.argv.slice(2);

let rowsInput = args[0];
let colInput = args[1];

let rows = Number(rowsInput);
let columns = Number(colInput);

if (!isNaN(rows) && !isNaN(columns)) {
    let tableString = createMultiplicationTable(rows, columns);
    console.log(tableString);

} else {
    console.log('Error: Invalid input')
}
