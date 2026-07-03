// leetcode

// Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:

// When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
// When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].

// create class
class ArrayWrapper {

    // runs when the class is called
    constructor(nums) {

        this.nums = nums;
    }

    // built in javaScript method ( obj + obj2 )
    valueOf() {

        // "reduce" means combine all values into one final value
        return this.nums.reduce((currentValue, currentNumber) => currentValue + currentNumber, 0);
            }
            toString() {
                return `[${this.nums.join(",")}]`;
            }
}

// test cases
const arr1 = new ArrayWrapper([1, 2, 3]);
// const arr2 = new ArrayWrapper([4, 5, 6]);
// const arr3 = new ArrayWrapper(["Hi, tubol"]);

// console.log(arr1 + arr2);

// console.log(String(arr1)); 
// console.log(String(arr3));
console.log(arr1.valueOf());
console.log(arr1);

