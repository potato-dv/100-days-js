// Topics: Recursion, Arrays

// Description

// Given a nested array containing numbers, return the sum of every number at every depth.

// function sumNestedArray(arr) {

//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             sum += sumNestedArray(arr[i]);
//         } else {
//             sum += arr[i];
//         }
//     }
//     return sum;
// }

// // test cases
// const arr1 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
// console.log(sumNestedArray(arr1)); // Output: 120


function sumNestedArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {

    sum += Array.isArray(arr[i]) 
      ? sumNestedArray(arr[i]) 
      : arr[i];
    }

    return sum;
}

const inputArrayNumbers = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
console.log(sumNestedArray(inputArrayNumbers));