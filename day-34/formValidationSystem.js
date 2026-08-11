// Build a reusable form validation system for a website registration form.

// Situation

// You're building the signup page for an e-commerce website.

// Before allowing a user to register, you need to validate their information.

// You need to validate:

// Username

// At least 3 characters
// Must not contain spaces

// Email

// Must contain @
// Must contain .

// Password

// At least 8 characters
// Must contain a number

function createValidator(rules) {
    return function(value) {

        const failedRules = rules.filter(rule => !rule.test(value));
        const failedMessages = failedRules.map(rule => rule.message);

        const isValid = failedMessages.length === 0;
        
        return {
            isValid,
            errors:failedMessages
        };
    }
}

const validateUsername = createValidator([{
    test: value => value.length >= 3,
    message: "Username must contain at least 3 characters"
},
{
    test: value => !/ /.test(value),
    message: "Username must not contain spaces"
}]);

const validateEmail = createValidator([
{
    test: value => value.includes("@") && value.includes("."),
    message: "Email must contain @ and ."
}]);    

const validatePassword = createValidator([{ 
    test: value => value.length >= 8,
    message: "Password must contain at least 8 characters"
},
{
    test: value => /[0-9]/.test(value),
    message: "Password must contain a number"
}]);

console.log(validateUsername("lj"));
console.log(validateEmail("email@example.com"));
console.log(validatePassword("password123"));