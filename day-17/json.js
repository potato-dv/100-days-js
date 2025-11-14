//leetcode
/** 
 * Given an object or an array, return if it is empty.
 * An empty object contains no key-value pairs.
 * An empty array contains no elements.
 * You may assume the object or array is the output of JSON.parse.
*/

var isEmpty = function(obj) {
    return Object.keys(obj).length === 0;
}

// example usage:
// console.log(isEmpty([1,2,3]));
// console.log(isEmpty({x: 1, y: 2, z: 3}));

// let obj1 = [];
// console.log(isEmpty(obj1));

// let obj2 = {x: 1, y: 2, z: 3};
// console.log(isEmpty(obj2));
