//leetcode
/**  
 * Write a class that allows getting and setting key-value pairs, 
 * however a time until expiration is associated with each key.

 * The class has three public methods:

 * set(key, value, duration): accepts an integer key, an integer value,
   and a duration in milliseconds. Once the duration has elapsed, 
   the key should be inaccessible. The method should return true 
   if the same un-expired key already exists and false otherwise. 
   Both the value and duration should be overwritten if the key 
   already exists.

 * get(key): if an un-expired key exists, it should return the 
   associated value. Otherwise it should return -1.

 * count(): returns the count of un-expired keys.
*/

var TimeLimitedCache = function() {
    this.cache = new Map();
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
    const now = Date.now();
    const existing = this.cache.get(key);

    const hasUnexpired = existing && existing.expireTime > now;
    
    this.cache.set(key, {
        value: value,
        expireTime: now + duration,
    });

    return !!hasUnexpired;
};

TimeLimitedCache.prototype.get = function(key) {
    const now = Date.now();
    const data = this.cache.get(key);

    if (!data) return -1;

    if (data.expireTime <= now) {
        this.cache.delete(key);
        return -1;
    };

    return data.value;
};

    TimeLimitedCache.prototype.count = function() {
        const now = Date.now();
        let count = 0;

        for (const [key, data] of this.cache) {
            if (data.expireTime > now) {
                count++;

            } else {
                this.cache.delete(key);
            }
        }
        return count;
    };

//example usage
const timeLimitedCache = new TimeLimitedCache();
console.log(timeLimitedCache.set(5, 42, 100));
console.log(timeLimitedCache.get(5));
console.log(timeLimitedCache.count());

// if you want to test expiration, uncomment the following lines:
// setTimeout(() => {
//     console.log(timeLimitedCache.count());
// }, 200);