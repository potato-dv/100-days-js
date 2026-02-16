//leetcode
/** 
 * Given an array arr and a chunk size size, return a chunked array.

 * A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

 * Please solve it without using lodash's _.chunk function.
 */

var chunk = function(arr, size) {
     let result = [];
     for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
         } 
         return result;
};

//test cases
console.log(chunk([1, 2, 3, 4, 5], 3)); // [[1, 2, 3], [4, 5]]
console.log(chunk([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5], 1)); // [[1], [2], [3], [4], [5]]

// The function chunk splits an array into smaller arrays (chunks) of a given size.