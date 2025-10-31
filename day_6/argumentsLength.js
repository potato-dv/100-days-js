//leetcode
/**
 * Write a function argumentsLength that returns the count of arguments passed to it.
*/

var argumentsLength = function(...args) {
    return args.length;
    
};

// const argumentsLength = (...args) => args.length;     --- // shorter modern version.

console.log(argumentsLength(5)); // 1
console.log(argumentsLength(5, (6), [], {}, "8")); // 5