// In ES6 moduling we directly write export keyword before the functions or variable that need to be exported
// Hence there is no creation of another module.exports object for exporting 
// This looks way cleaner 

export function linear_search(arr, key) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == key) return i;
    }
    return undefined;
}

export default function binary_search(arr, key) {
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
