// Topics: Closures 
// Description Create a function createCounter that stores a private count.
// It must return these methods: increment() decrement() reset() getValue()

function createCounter (initialValue = 0) {
    let count = initialValue 

    return {
        increment: (amount = 1) => {
            count += amount
        },
        decrement: (amount = 1) => {
             count -= amount;
        },
        reset: function() {
            count = initialValue
        },
        getValue: function() {
            return count;
        }
    }
}

// test cases
const counter1 = createCounter(5);
console.log(counter1.getValue()); // 5
counter1.increment();
counter1.increment();
console.log(counter1.getValue()); // 7
counter1.decrement(); 
console.log(counter1.getValue()); // 6
counter1.reset(); 
console.log(counter1.getValue());// 5
console.log(counter1.createCounter);  // undefined

const counter2 = createCounter(5);
console.log(counter2.getValue()); // 5
counter2.increment(5);
counter2.increment(5);
console.log(counter2.getValue()); // 15
counter2.decrement(2); 
console.log(counter2.getValue()); // 13
counter2.reset(); 
console.log(counter2.getValue());// 5
console.log(counter2.createCounter);  // undefined