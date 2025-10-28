// leetcode
/**
 * Given two promises promise1 and promise2, return a new promise. 
 * promise1 and promise2 will both resolve with a number. The returned promise 
 * should resolve with the sum of the two numbers.
 */
var addTwoPromises = async function(promise1, promise2) {
    const [a, b] = await Promise.all([promise1, promise2]);
    return a + b;
};

// Example usage:
addTwoPromises(
  new Promise(resolve => setTimeout(() => resolve(2), 20)),
  new Promise(resolve => setTimeout(() => resolve(5), 60))
).then(console.log); // Output: 7
