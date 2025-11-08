// leetcode
/**
 * Given an array of asynchronous functions functions, return a new promise promise. 
 * Each function in the array accepts no arguments and returns a promise. 
 * All the promises should be executed in parallel.

 * Promise resolves:

 * When all the promises returned from functions were resolved successfully in parallel. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions. The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.

 * Promise rejects:

* When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.

* Please solve it without using the built-in Promise.all function
 */

var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    const results = [];
    let Count = 0;

    if (functions.length === 0) {
      resolve([]);
      return;
    }

    functions.forEach((fn, index) => {
      try {
        const promise = fn();

        promise
          .then((value) => {
            results[index] = value;
            Count++;

            if (Count === functions.length) {
              resolve(results);
            }
          })

          .catch((error) => {
            reject(error); // If any one promise fails, immediately reject the whole thing.
          });
      } catch (error) {
        reject(error);
      }
    });
  });
};

// example usage - 1
// const functions = [
//     () => new Promise(resolve =>  setTimeout(() => resolve((5), 200))),

// ];

// promiseAll(functions)
//     .then(console.log)
//     .catch(console.error);

// example usage - 2
// const functions = [
//     () => new Promise(resolve => setTimeout(() => resolve(1), 200)),
//     () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100)),
// ];

// promiseAll(functions) //Promise.all(), which also rejects as soon as one promise fails.
//     .then(console.log)
//     .catch(console.error);

// // example usage - 3
// const functions = [
//   () => new Promise(resolve => setTimeout(() => resolve(1), 100)),  
//   () => { throw new Error("Function crashed immediately!"); }, // sync error
//   () => new Promise(resolve => setTimeout(() => resolve(3), 200))
// ];

// promiseAll(functions).then(console.log).catch(console.error);

// example usage - 4
// const functions = [
//   () => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
//   () => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
//   () => new Promise((resolve) => setTimeout(() => resolve(16), 100)),
// ];

// promiseAll(functions).then(console.log).catch(console.error); 
