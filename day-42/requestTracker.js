export function requestTracker() {
    let count = 0;

    return {
        record: function() {
           count++;
        },
        count: function() {
            return count;
        },
        reset: function() {
            count = 0;
        }
    }
};

// test cases
const apiTracker = requestTracker();

apiTracker.record();
apiTracker.record();
apiTracker.record();
apiTracker.record();
console.log(apiTracker.count());

apiTracker.reset();
console.log(apiTracker.count());


const authTracker = requestTracker();

authTracker.record();
authTracker.record();
console.log(authTracker.count());
