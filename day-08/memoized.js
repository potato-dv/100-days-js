//leetcode
/**
 * Given a function fn, return a memoized version of that function.

 * A memoized function is a function that will never be called twice with the same inputs. 
   Instead it will return a cached value.

 * You can assume there are 3 possible input functions: sum, fib, and factorial.

 * sum accepts two integers a and b and returns a + b. Assume that if a value has already been cached 
   for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, 
   if the arguments are (3, 2) and (2, 3), two separate calls should be made.

 * fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
   factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.

 * @param {*} fn 
 * @returns 
 */

function memoize(fn) {
    let cache = {};
    let callCount = 0;

    const memoizedFn = function(...args) {
        const key = JSON.stringify(args);
        if (cache.hasOwnProperty(key)) {    
            return cache[key];
        }
        callCount++;
        const result = fn.apply(this, args);
        cache[key] = result;
        return result;
    };
    memoizedFn.getCallCount = function() {
        return callCount;
    };
    return memoizedFn; // If your function builds another function, you return the function
                       // (a tool to use later).
}; 

const fn = (a, b) => (a + b);
const memoizedsum = memoize(fn);

console.log("First Call: " + memoizedsum(1, 2));
console.log("Another Call: " + memoizedsum(2, 3));
console.log("cache: " + memoizedsum(1, 2)); // cached result
console.log("Another Call: " + memoizedsum(3, 3));
console.log("Counted call: " + memoizedsum.getCallCount()); // 2