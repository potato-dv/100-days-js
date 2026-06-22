// leetcode
// Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

// A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

// A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.

// Please solve it without the built-in Array.flat method.

const flat= function(arr, n) {
    const result = [];

    const flatten = function(currentArray, depth) { // defines a helper function called flatten that takes in the current array being processed and the current depth of nesting.

        for (const item of currentArray) { // iterates through each item in the current array.
            if (Array.isArray(item) && depth < n) { // checks if the item is an array and if the current depth is less than n. If both conditions are true, it means that the item is a sub-array that should be flattened further.
                flatten(item, depth + 1); // if the item is a sub-array that should be flattened, the flatten function is called recursively with the item as the new current array and the depth incremented by 1.
            } else {
                result.push(item); // if the item is not an array or if the current depth is equal to or greater than n, the item is added to the result array as is.
            }
        }
    }
    flatten(arr, 0); // the flatten function is initially called with the original array and a depth of 0 to start the flattening process.
    return result; 
}

// test cases
// const arr1 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];

// console.log(flat(arr1, 0));
// console.log(flat(arr1, 1));
// console.log(flat(arr1, 2));

const company = [
                    "CEO", "CTO", 
                [
                    "VP of Engineering", "VP of Product"], 
                [
                    "Director of Engineering", 
                [
                    "Director of Product"], 
                [
                    "CFO", "COO"
                ]
            ]
    ];
console.log(flat(company, 0));
console.log(flat(company, 1));
console.log(flat(company, 2));
console.log(flat(company, 3));