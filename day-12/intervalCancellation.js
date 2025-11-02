// leetcodde
/**  
 * Given a function fn, an array of arguments args, and 
 * an interval time t, return a cancel function cancelFn.

 * After a delay of cancelTimeMs, the returned cancel 
   function cancelFn will be invoked.

 * setTimeout(cancelFn, cancelTimeMs)
   The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelTimeMs ms.
*/

var cancellable = function (fn, args, t) {
  fn(...args);

  const intervalId = setInterval(() => {
    fn(...args);
  }, t);

  const cancelFn = () => {
    clearInterval(intervalId);
  };
  return cancelFn;
};

// example usage:
const result = [];

const fn = (x) => x * 2;
const args = [2];
const t = 35;
const cancelTimeMs = 190;

const start = performance.now();

const log = (...argsArr) => {
  const diff = Math.floor(performance.now() - start);

  result.push({ time: diff, returned: fn(...argsArr) });
};
const cancelFn = cancellable(log, args, t);

setTimeout(() => {
  console.log(result);
}, cancelTimeMs + 50);
