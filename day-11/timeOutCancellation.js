// leetcode
/**
 * Given a function fn, an array of arguments args, 
   and a timeout t in milliseconds, return a cancel function cancelFn.

 * After a delay of cancelTimeMs, the returned cancel function 
   cancelFn will be invoked.

 * setTimeout(cancelFn, cancelTimeMs)
   Initially, the execution of the function fn should be 
   delayed by t milliseconds.

 * If, before the delay of t milliseconds, the function 
   cancelFn is invoked, it should cancel the delayed execution of fn. 
   Otherwise, if cancelFn is not invoked within the 
   specified delay t, fn should be executed with the 
   provided args as arguments.
 */

var cancellable = function (fn, args, t) {
  const timeoutId = setTimeout(() => {
    fn(...args);
  }, t);

  const cancelFn = function () {
    clearTimeout(timeoutId);
  };
  return cancelFn;
};

// Example usage:
const result = [];
const fn = (x) => x * 2;
const args = [2];
const t = 20;
const cancelTimeMs = 50;

const start = performance.now();

const log = (...argsArr) => {
    const diff = Math.floor(performance.now() - start);
    result.push({ time: diff, returned: fn(...argsArr) });
};

const cancelFn = cancellable(log, args, t);

setTimeout(() => {
    console.log("Example 1 result:", result);
}, Math.max(t, cancelTimeMs) + 20);

