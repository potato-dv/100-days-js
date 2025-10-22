//leetcode
/**
 * Given an integer array arr and a mapping function fn, return a new array with a 
   transformation applied to each element.

* The returned array should be created such that returnedArray[i] = fn(arr[i], i).

 * Please solve it without the built-in Array.map method.
 */
/** 
Example 1:

Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one. 
Example 2:

Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
Output: [1,3,5]
Explanation: The function increases each value by the index it resides in.
Example 3:

Input: arr = [10,20,30], fn = function constant() { return 42; }
Output: [42,42,42]
Explanation: The function always returns 42.
*/

// After the  problem description, we can see that we need to create a function called "map" that takes in an array and a function as parameters.

var map = function (array, fn) { // (array, fn) called parameters "you have two parameters: an array and a function"
  const result = [];
  for (let i = 0; i < array.length; i++) { // start, condition, update "(let i = 0; i < array.length; i++)" this called for loop.
    result.push(fn(array[i], i));
  }
  return result;
};

function plusOne(n) {
  return n + 1;
}

function plusI(n, i) {
  return n + i;
}

function constant() {
  return 42;
}

console.log(map([1, 2, 3], plusOne)); // [2, 3, 4]
console.log(map([10, 20, 30], plusI)); // [11, 21, 33]
console.log(map([10, 20, 30], constant)); // [42, 42, 42]
