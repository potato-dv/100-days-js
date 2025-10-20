// leetcode
/** 
* Write a function expect that helps developers test their code. 
* It should take in any value val and return an object with the 
* following two functions.
*/

/** 
* toBe(val) accepts another value and returns true if the two values === 
* each other. 
* If they are not equal, it should throw an error "Not Equal".
* notToBe(val) accepts another value and returns true if the 
* two values !== each other. If they are equal, it should throw an error "Equal".
*/

// if "toBe" we expect that the value you input is equal to the other value.
// if "notToBe" we expect that the value you input is NOT equal to the other value.

var expect = function(val) {
  return { 

    toBe: function(otherVal) {
      if (val === otherVal) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    
    notToBe: function(otherVal) {
      if (val !== otherVal) {
        return true;
      } else {
        throw new Error("Equal");
      }
    }
  };
};

//test cases
try {
    console.log(expect(5).toBe(5));
} catch (error) {
    console.log({error: error.message});  // Not Equal
}

try {
  console.log(expect(5).notToBe(5)); 
} catch (error) {
  console.log({ error: error.message }); // Equal
}