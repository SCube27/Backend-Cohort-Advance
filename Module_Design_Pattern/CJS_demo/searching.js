const linear_search = function iterative_ls(arr, key) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == key) return i;
    }
    return undefined;
}

const binary_search = function iterative_bs(arr, key) {
    let s = 0, e = arr.length - 1;

    while(s <= e) {
        let mid = s + Math.floor((e-s)/2);
        if(arr[mid] == key) return mid;
        else if(arr[mid] < key) {
            s = mid + 1;
        }
        else {
            e = mid - 1;
        }
    }
    return undefined;
}

// The module global is use to create a module of the functions / variables present in a given file
// We just need to use the exports function present in the module and then add key value pairs in the object of the list of functions & variables
module.exports = {
    linear_search : linear_search,
    binary_search : binary_search
};

// we can directly do this too
module.exports.linear_search = linear_search;

// We can directly export a function too
module.exports = binary_search();