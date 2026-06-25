// leetcode
// Even an object or array obj, return a compact object.

// A compact object is the same as the original object, except with keys containing falsy values removed. 
// This operation applies to the object and any nested objects. 
// Arrays are considered objects where the indices are keys. 
// A value is considered falsy when Boolean(value) returns false.

// You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

const compactObject = function (obj) {
    if (Array.isArray(obj)) { // is obj an array?
         
        // create an empty array 
        const result = [];

        for (const item of obj) { // loop through each item in the array
            const cleanItem = compactObject(item); // recursion
            if (cleanItem) {
                result.push(cleanItem);
            }
        }
        return result;
    }
    if (obj !== null && typeof obj === "object" ) { // if obj is not equal to null AND typeof ob is strictly equal to string of "object" (not the object itself but the type of the object).

        const result = {}; // empty object to store the result

        for (const key in obj) { // loop through each key in the object
            const cleanValue = compactObject(obj[key]); // recursion 
            if (cleanValue) {
                result[key] = cleanValue; 
            }
        }
        return result;
    }
    return obj; // this is the base case, if obj is not an array or object, return the obj itself.
}

// test cases

// console.log(compactObject([null, 0, false, 1, 2, "", 3, undefined, 4, [], {}]));

// const obj1 = {
//     a: 1,
//     b: null,
//     c: {
//         d: false,
//         e: "hello",
//         f: {
//             g: undefined,
//             h: 0
//         }
//     },
//     i: [1, 2, null, 3, undefined, 4]
// };

// console.log(compactObject(obj1));

// const obj2 = {
//     a: 0,
//     b: "",
//     c: {for (const key in obj)
//         d: null,
//         e: [],
//         f: {
//             g: false,
//             h: {}
//         }
//     },
//     i: [null, undefined, false]
// };

// console.log(compactObject(obj2));   

const netoy = {
    name: "lauris lorenzo",
    age: 80,
    address: {
        street: "maleta gang",
        city: "Crocs",
        state: null,
        zip: undefined
    },
    skills: ["JavaScript", "Malungay Pandesal", "", null, "React", undefined, "MonggoDB"],
    experience: {
        company: "Lauris Tech",
        postion: "",
        years: 0
    },
    hobbies: [null, "bashing", undefined, "malungcoat", false]
};

console.log(compactObject(netoy));
