// Topics: Higher-Order Functions, Closures

// Description:
// Create a function called createValidator that receives validation rules and returns a validator function.

// Requirements
// Create a function:
// function createValidator(rules) {
//   // your solution
// }
// Each rule must contain:
// test → a function that checks whether the value is valid.
// message → the error message if the test fails.

// Example rule:

// {
//   test: value => value.length >= 8,
//   message: "Password must contain at least 8 characters"
// }
// createValidator() must return a function.
// The returned function should accept a value:
// const validatePassword = createValidator([...]);

// validatePassword("hello");
// The validator must run all rules against the value.
// If a rule's test() returns false, add its message to the errors.
// Return all failed messages in an array.

// For example:

// validatePassword("hello");

// Should produce:

// [
//   "Password must contain at least 8 characters",
//   "Password must contain a number"
// ]

function createValidator(rules) {

    return function(value) {
        const failedRules = rules.filter(rule => !rule.test(value));

        const failedMessages = failedRules.map(rule => rule.message);
        
        // bonus
        const isValid = failedMessages.length === 0; 

        return {
        isValid, 
        errors: failedMessages
        };
    };
}

 const validatePassword = createValidator([
         {
            test: value => value.length >= 8,
            message: "Password must contain at least 8 characters"
        },
        {
            test: value => /[0-9]/.test(value),
            message: "Password must contain a number"
        }
    ]);



    // test cases
    console.log(validatePassword("hipoko432523"));