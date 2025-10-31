//leetcode
/**
 * Given a positive integer millis, write an asynchronous function that sleeps for millis 
   "milliseconds". It can resolve any value.

 * Note that minor deviation from millis in the actual sleep duration is acceptable.
 */

async function sleep(millis) {
    return new Promise(function(resolve) {
       setTimeout(resolve, millis);
    });
};

// Example usage:
let t = Date.now();
sleep(1000).then(() => { // .then( () => {} ) means "when the promise is resolved, do this..."
    console.log(Date.now() - t);
});