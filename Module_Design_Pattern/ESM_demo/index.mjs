// Since the file extension of this file is .mjs the require keyword is not supported and hence error at runtime
// .mjs file extension types are strictly supported for ES6 modules
/* const searches = require('./searching'); */

// using .js after file name is mandatory as the searching file is still in CJS format
/* import searches from './searching.js'; */ 

// if we convert searching file in .mjs format still the exports are in CJS format and hence this wont work
import searches from './searching.mjs'; 

// The above import will only run if the function is exported as default (in this case binary_search has been) hence its called a default import

// So for linear search to work we have to do a named import
import { linear_search } from './searching.mjs';

console.log(searches); 

// Using modules
const arr = [1, 3, 9, 12, 21, 27, 39, 48, 24, 25];
console.log(linear_search(arr, 39)); // Since this is a named import directly use the function name
console.log(searches.binary_search(arr, 48)); // This is a default import hence using searches is mandatory
