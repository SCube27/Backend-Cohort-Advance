// Now here another global is require that says whatever modules are being exported from the particular path in parenthesis take all of the modules 
const searches = require('./searching');

console.log(searches); // Prints a object containing the list of modules present in that particular path

// Now we can directly start using them
const arr = [1, 3, 9, 12, 21, 27, 39, 48, 24, 25];
console.log(searches.linear_search(arr, 39));
console.log(searches.binary_search(arr, 48));

// we can destructure the imports too, i.e taking only whatever properties we need from the module
const { linear_search, binary_search } = require('./searching');

const { binary_search : bs } = require('./searching'); // we can also add alias if names are too long

// we have exported a function of binary search so
const binary_search = require('./searching'); // can be used on modules having single function