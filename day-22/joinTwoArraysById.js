// leetcode
// Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value. 

// joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.

// If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.

// If two objects share an id, their properties should be merged into a single object:

//     If a key only exists in one object, that single key-value pair should be included in the object.
//     If a key is included in both objects, the value in the object from arr2 should override the value from arr1.

const join = (arr1, arr2) => {
    const result = {}; // - initializes an empty object called result to store the merged objects based on their id values.

    for  (const obj of arr1) {
        result[obj.id] = obj; // - iterates through each object in arr1 and adds it to the result object using the id as the key. This allows for easy access and merging of objects based on their id values.
    }
    for (const obj of arr2) {
        if (result[obj.id]) {

            result[obj.id] = {
                ...result[obj.id],
                ...obj            // - The spread operator is used to merge the properties of the existing object in result with the new object from arr2.
            };

        } else {
            result[obj.id] = obj;
        }
    }
    return Object.values(result)
        .sort((a, b) => a.id - b.id); // - sorts the objects in ascending order based on their id values.
};

// test cases

// const arr1 = [{ id:1, x:1},
//               { id:2, x:9}, 
//               { id:3, x:5}
//             ];

// const arr2 = [{ id:3, y:4},
//               { id:4, y:2}
// ];

// console.log(join(arr1, arr2));

const arr1 = [{ id:1, name: "lauriszss", likes: 101},
            { id:2, name: "alden ricahrd", likes: 1050},
            { id:3, name: "moriel pangilinan", likes: 1050}
        ];

const arr2 = [{ id:1, name: "lauriszss", likes: 110, views: 503},
                { id:2, name: "alden ricahrd", likes: 11050},
                { id:3, name: "moriel pangilinan", likes: 2060, views: 80809}
];

console.log(join(arr1, arr2));

