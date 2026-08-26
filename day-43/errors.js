// MEDIUM  |  Error, custom errors, try/catch, throw, error propagation
// Objective: Treat errors as expected program outcomes instead of random crashes.
// Challenge: Build validateRegistration(data) with ValidationError and ConflictError classes.
// Requirements
//     • Validate name, email, and password presence.
//     • Return field details in validation errors.
//     • Catch only where a useful recovery or translation is possible.
// Example: invalid email -> ValidationError with {field: "email"}
// Starter code
// class ValidationError extends Error {
//   constructor(message, details) { /* ... */ }
// }
// Constraints
//     • Do not return error strings as normal success values.
//     • Preserve the original error type.
// Bonus: Map each error class to a future HTTP status code.
// Main skill gained: Creating an error vocabulary that later becomes consistent API responses.

const registrationData = {
    name: "yvann",
    email: "nobita@gmail.com",
    password: "securepassword"
};

const existingEmails = ["lauris@example.com", "john@example.com"];


class ValidationError extends Error {
    constructor(message, details) {
        super(message);
        this.name = "ValidationError";
        this.details = details;
    }
};

class ConflictError extends Error {
    constructor(message, details) {
        super(message);
        this.name = "ConflictError";
        this.details = details;
    }
};

function validateRegistration(data) {
    
    if (!data.name) {
        throw new ValidationError("Name is required", { field: "name" });
    }
    if (!data.email) {
        throw new ValidationError("Email is required", { field: "email" });
    }
    if (!data.email.includes("@")) {
        throw new ValidationError("Invalid email format", { field: "email"});
    }
    if (!data.password) {
        throw new ValidationError("Password is required", { field: "password"});
    }
    if (existingEmails.includes(data.email)) {
        throw new ConflictError("Email already exists", { field: "email" });
    }
};


//test cases

try {
    validateRegistration(registrationData);
    console.log("Registration data is valid.");

} catch (error) {
    if (error instanceof ValidationError) {
        console.error("Error Message:", error.message);
        console.error("Validation Error:", error.details);

    } else if (error instanceof ConflictError) {
        console.error("Error Message:", error.message);
        console.error("Conflict Error:", error.details);

    } else {
        console.error("Unexpected error:", error);
    }
;}
