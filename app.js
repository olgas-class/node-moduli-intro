// const fs = require('fs');
// const path = require('path'); // modulo che è un oggetto

import fs from 'fs';
import path from 'path';

import chalk from 'chalk';

fs.readFile('./txt/input.txt', 'UTF-8', (err, result) => {
  // Solo qui dentro possiamo avere il risultato della lettura
  console.log(err);
  
  console.log(chalk.bgBlue(result));
  fs.appendFile('./txt/output.txt', result, 'utf-8', () => {
    console.log('Ho scritto nel file');
  });
});

// const argoments = process.argv;
// // console.log(argoments);
// 
// const curFile = argoments[1];
// console.log(curFile);
// console.log(path.basename(curFile));
// console.log(path.extname(curFile));
// 
// console.log(__dirname);
// console.log(__filename);










// Common JS syntax
// const functions = require('./modules/functions'); // object

// ES6 syntax
// import functions from "./modules/functions.js";

// console.log(functions);
// 
// const result = functions.somma(10, 20);
// console.log(result);
// 
// console.log(functions.name);




