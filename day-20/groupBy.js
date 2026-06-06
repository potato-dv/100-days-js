// leetcode
// Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.

// A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array which generate that key.

// The provided callback fn will accept an item in the array and return a string key.

// The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.

// Please solve it without lodash's _.groupBy function.

Array.prototype.groupBy = function(fn) {
    const result = {};
    
    for  (let i = 0; i < this.length; i++) {

        const item = this[i];
        // console.log("Item", item);

        const key = fn(item);
        // console.log("Key", key);

        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);

    }
    return result;
};

//test cases

// const user = [1, 2, 3, 4, 5];

// const result = numbers.groupBy(num => num % 2 === 0  ? "even" : "odd");

const user = [{name: "liezl", sex: "female"},
              {name: "lauris", sex: "male"},
              {name: "francis", sex: "male"},
              {name: "Prince", sex: "male"},
              {name: "jiezlin", sex: "female"},
              {name: "lebron", sex: "damn"}
];

const result = user.groupBy(user => user.sex);

console.log(result); 