//leetcode
/**
 * Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

 * The fn function takes one or two arguments:

 * arr[i] - number from the arr
 * i - index of arr[i]

 * filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) 
   evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

 Please solve it without the built-in Array.filter method.
*/

// The difference between the filter and map. The filer function is used to filter the elements of an array 
// based on a condition(if) and adds only elements that pass the fn(), 

// While the map function is used to transform each element of an array into a new value.
// It always pushes the return value from fn() into the result.

var filter = function (arr, fn) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {   // only pushes the value if the condition returns true.
            result.push(arr[i]);
        }
    }
    return result;
};

function greaterThan10(n) {
    return n > 10;
}

const arr2 = [1, 2, 3];
function firstIndex (n, i) {
    return i === 0;
}

function plusOne(n) {
    return n + 1 > 0;
}

console.log(filter([0, 10, 20, 30], greaterThan10));
console.log(filter([1, 2, 3], firstIndex));
console.log(filter([-2, -1, 0, 1, 2], plusOne));