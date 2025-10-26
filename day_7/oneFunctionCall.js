//leetcode
/**
 * Given a function fn, return a new function that is identical to the original 
 * function except that it ensures fn is called at most once.

 * The first time the returned function is called, it should return the same result as fn.
   Every subsequent time it is called, it should return undefined.
*/
var once = function(fn) {
// ******* this is another way to do it: *******
    // let called = false;
    // return function(...args) {
    //     if (called) return undefined;
    //     called = true;
    //     return fn.apply(this, args);

        let called = false; // defined, not called yet.
    return function(...args) {
        if (called) {
            return undefined;
        } else {
            called = true;
            return fn.apply(this, args);
        }
    };
};

const fn = (a, b, c) => (a + b + c);
const oneTimeFunction = once(fn);

const fn2 = (a, b, c) => (a + b + c);
const oneTimeFunction2 = once(fn);

console.log(oneTimeFunction(1, 2, 3)); // 6
console.log(oneTimeFunction(4, 5, 6)); // undefined

console.log(oneTimeFunction2(2, 2, 3)); // 6
console.log(oneTimeFunction2(4, 5, 6)); // undefined