// MEDIUM  |  Block scope, lexical scope, closures, factory functions
// Objective: See why variables are or are not accessible and use closure safely.
// Challenge: Create makeRateLimiter(limit) that tracks calls without exposing its counter.
// Requirements
//     • allowed() returns true until the limit is reached.
//     • reset() clears the counter.
//     • Two limiter instances must not share state.
// Example: const gate = makeRateLimiter(2); gate.allowed() -> true, true, false
// Starter code
// export function makeRateLimiter(limit) {
//   let count = 0;
//   return { /* methods */ };
// }
// Constraints
//     • No class.
//     • No global counter.
// Bonus: Add remaining() and explain why count stays accessible.

export function makeRateLimiter(limit) {

    let count = 0;

    return {
        allowed: function() {
            if (count < limit) {
                count++;
                return true;
            } else {
                return false;
            }
        },
        reset: function() {
            count = 0;
        },
        remaining: function() {
            return limit - count;
        }
    }  
    
}

// test cases
const gate1 = makeRateLimiter(2);
console.log(gate1.allowed());
console.log("You have " + gate1.remaining() + " calls remaining.");

console.log(gate1.allowed());
console.log("You have " + gate1.remaining() + " calls remaining.");

console.log(gate1.allowed());
gate1.reset();
console.log("You have " + gate1.remaining() + " calls remaining.");

console.log(gate1.allowed());

// const gate2 = makeRateLimiter(3);
// console.log(gate2.allowed());
// console.log(gate2.allowed());
// console.log(gate2.allowed());
// console.log(gate2.allowed());