//leetcode
/** 
 * Write a function createCounter. It should accept an initial integer init. 
   It should return an object with three functions.

 * The three functions are:

 * increment() increases the current value by 1 and then returns it.
 * decrement() reduces the current value by 1 and then returns it.
 * reset() sets the current value to init and then returns it.
*/

// using let is more safe here to avouid global variuables issue.
// using var to this createCounter function will cause issues if there are multiple counters created.

var createCounter = function (init) {
  let current = init;

  return {
    increment: function () {
      current += 1;
      return current;
    },
    reset: function () {
      current = init;
      return current;
    },
    decrement: function () {
      current -= 1;
      return current;
    },
  };
};

const counter = createCounter(5);
console.log(counter.increment()); //6
console.log(counter.reset()); //5
console.log(counter.decrement()); //4
