// Topics: Set, Map

// Description

// You are given an array of usernames representing website visits.


const users = ["Moriel","Richard", "Lauris", "Lauris", "James", "Richard"];

function analyzeVisitors(users) {
                 
    const uniqueVisitors = new Set(users).size; // - creates a new Set from the users array, which automatically removes duplicate usernames. The size property of the Set gives the count of unique usernames, which is stored in the uniqueVisitors variable.

    const visitorCountMap = new Map() // - initializes a new Map called visitorCountMap to keep track of the number of visits for each unique username. A Map is a collection of key-value pairs, where each key is a unique username and the corresponding value is the count of visits for that username.

// forEach
// Loop through each user in the array.
 // For every user:
 // 1. Get the current count from the Map.
 // 2. If the user doesn't exist yet, start at 0.
 // 3. Add 1 to the count.
 // 4. Save the updated count back to the Map.
    users.forEach(user => { 
        visitorCountMap.set // before you call the function itself you must evalutes the arguments first.
             (user, // first argument to set the key in the map
             (visitorCountMap.get(user) || 0) + 1) // second argument to set the value in the map. It uses the logical OR operator (||) to check if the user already exists in the map. If it does, it retrieves the current count using visitorCountMap.get(user). If it doesn't exist, it defaults to 0. Then, it adds 1 to the count and sets it back in the map.
    });

    const sortedVisitors = [...visitorCountMap].sort((a, b) => a[1] - b[1]);


    const topVisitor = users.reduce((maxUser, currentUser) => { 
        return visitorCountMap.get(currentUser) > visitorCountMap.get(maxUser) ? currentUser : maxUser; // visitorCountMap.get("") get the value in the map. it have different in the previous  code we do not use the get() method because we are setting the value in the map, not retrieving it. In this case, we want to compare the visit counts of the current user and the max user, so we use get() to retrieve their counts from the map. 
    }, users[0]);

    return {
        uniqueVisitors,
        visitorCountMap,
        topVisitor,
        sortedVisitors
    };
}


// test cases

// const users = ["Moriel","Richard", "Lauris", "Lauris", "James", "Richard"];
console.log(analyzeVisitors(users));