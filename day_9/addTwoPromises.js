// leetcode
/**
 * Given two promises promise1 and promise2, return a new promise. 
 * promise1 and promise2 will both resolve with a number. The returned promise 
 * should resolve with the sum of the two numbers.
 */

// async means your function always returns a "Promise".
// await means wait for the "Promise" to finish before moving to the next line.

var addTwoPromises = async function (promise1, promise2) { 
  const [a, b] = await Promise.all([promise1, promise2]);
    return a + b;
  };

  addTwoPromises(
      new Promise(resolve => setTimeout(() => resolve(2), 2000)),
      new Promise(resolve => setTimeout(() => resolve(5), 1000)))
      .then(console.log); // 7


