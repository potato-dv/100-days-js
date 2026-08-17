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
    const findUser = users.find(user => user.id === id);
    return findUser;
}

async function getActiveUsers(ids) {
    const userPromises = ids.map(id => fetchUser(id));
    const users = await Promise.all(userPromises);
    return users.filter(user => user.active);
}

// test cases
const users = [
    { id: 1, name: "Ana", active: true },
    { id: 2, name: "Ben", active: false },
    { id: 3, name: "Carl", active: true }
];

getActiveUsers ([1, 2, 3]) 
.then(usersActive => console.log(usersActive));
