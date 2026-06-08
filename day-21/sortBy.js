// leetcode
// Given an array arr and a function fn, return a sorted array sortedArr. 

// You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. 

// sortedArr must be sorted in ascending order by fn output.

// You may assume that fn will never duplicate numbers for a given array.

const sortBy = function(arr, fn) {
    return arr.sort((a, b) => {
        return fn(a) - fn(b); // uses subtraction to sort numbers in ascending order. 
                              //  If the result is negative, a comes before b; if positive, b comes before a; if zero, 
                              // they are considered equal.
    });
};

// test cases 

// const arr = [5, 4, 0, 1, 2, 3];
// const result = sortBy(arr, (value) => value);

// console.log(result);

const arr = [{ post: "lauris", views: 4000 },
             { post: "francis", views: 10000 },
             { post: "prince", views: 5000 },
             { post: "jiezlin", views: 2000 },
             { post: "lebron", views: 8000 }
];

const result = sortBy(arr, (item) => item.views);

console.log(result);