// MEDIUM  |  Promise.all, Promise.allSettled, rejection handling, debugging
// Objective: Choose the correct promise strategy for all-or-nothing versus partial results.
// Challenge: Repair a report loader where one failed request incorrectly destroys all usable results.
// Requirements
//     • Use Promise.all for required data.
//     • Use Promise.allSettled for optional widgets. 
//     • Produce a failure summary.
// Example: 3 optional calls, 1 rejected -> 2 results plus 1 recorded error
// Starter code
// const results = await Promise.allSettled(tasks);
// // separate fulfilled and rejected entries
// Constraints
//     • Do not silently ignore rejected promises.
//     • Explain why array order is preserved.
// Bonus: Add a timeout wrapper using Promise.race.

async function loadReport(){

const requiredResults = await Promise.all(requiredTasks);
 
const results = await Promise.allSettled(tasks);

const fulfilledResults = results
.filter(result => result.status === "fulfilled")
.map(result => result.value);

const rejectedResults = results
.filter(result => result.status === "rejected")
.map(result => result.reason);

return { requiredResults, fulfilledResults, rejectedResults };

}
// test cases

const requiredTasks = [
    Promise.resolve("User loaded"),
    Promise.resolve("dashboard loaded")
]

const tasks = [
   Promise.resolve("Post loaded"),
   Promise.reject("Link failed to load"),
   Promise.resolve("Banner loaded"),
];

const { requiredResults, fulfilledResults, rejectedResults } = await loadReport();

console.log("Required Results:", requiredResults);
console.log("Fulfilled Results:", fulfilledResults);
console.log("Rejected Results:", rejectedResults);


// the array preserved because of Promise.allSettled(). 
// Pomise.settled preserves the order even it is rejected or fulfilled.
