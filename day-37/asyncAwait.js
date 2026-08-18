// Topics: Async/Await, Promise.all

// Description

// You are given an array of user IDs.

// Fetch all users and return only users whose active property is true.

// Use the provided asynchronous function:

// async function fetchUser(id) {
//   // Assume this function returns a user
// }
// Example
// Input:
// [1, 2, 3]

// Fetched users:
// [
//   { id: 1, name: "Ana", active: true },
//   { id: 2, name: "Ben", active: false },
//   { id: 3, name: "Carl", active: true }
// ]

// Output:
// [
//   { id: 1, name: "Ana", active: true },
//   { id: 3, name: "Carl", active: true }
// ]
// Starter Code
// async function getActiveUsers(ids) {
//   // Write your solution here
// }


async function fetchUser(id) {

    // .find is a method that returns the first element in an array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned. 
//     .find()
// → searches the array
// → checks each item
// → returns the FIRST matching item
// → stops when it finds one
// → returns undefined if nothing matches
    const findUser = users.find(user => user.id === id);
    return findUser;
}
// this is connected to the started code.
// .map works by creating a new array and It collects the return value of fetchUser() for each ID.
async function activeUsers(ids) {
    const userPromises = ids.map(id => fetchUser(id));
    
    // await Promise.all() is used to wait for all the promises in the userPromises array to resolve. 
    // It returns an array of resolved values (users) once all promises are fulfilled.
    const users = await Promise.all(userPromises);
    return users.filter(user => user.active);
}

// test cases
const users = [
    { id: 1, name: "Ana", active: true },
    { id: 2, name: "Ben", active: false },
    { id: 3, name: "Carl", active: true }
];

activeUsers ([1, 2, 3]) 
.then(usersActive => console.log(usersActive));
