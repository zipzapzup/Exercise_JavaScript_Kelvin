import fs from "fs";
import path from 'path';

const FilePath = new URL('hello.txt', import.meta.url);

// read a file
const data = fs.readFileSync( FilePath, 'utf-8' )

console.log(data)


fs.writeFileSync(FilePath, 'New String and Words in Here', 'utf-8');

fs.appendFileSync(FilePath, '\nAnother Line');

const data2 = fs.readFileSync( FilePath, 'utf-8');

console.log(data2);