// EASY  |  Parameters, arguments, defaults, pure functions, guard clauses
// Objective: Understand what a parameter represents and prevent invalid calls early.
// Challenge: Implement createUserProfile(name, email, options) and debug five intentionally incorrect calls.
// Requirements
//     • options may contain role and active.
//     • Use defaults for omitted optional values.
//     • Return clear errors for missing required values.
// Example: createUserProfile("Lauris", "l@example.com", {role: "student"}) -> profile object
// Starter code
// export function createUserProfile(name, email, options = {}) {
//   // guard clauses first
// }
// Constraints
//     • No global variables.
//     • One function must have one clear responsibility.
// Bonus: Accept a single object parameter and compare readability.
// Main skill gained: Designing predictable functions like future controllers and services.

export function createUserProfile(name, email, options = {}) {
    if (!name || !email) {
        throw new Error("Some required parameters are missing");
    }
    return {
        name, 
        email, 
        role:   options.role || "user", 
        active: options.active ?? true
    }
};

// test cases
const profile = createUserProfile(
    "Lauris",
    "l@example.com",
    {
        role: "student",
        active: false
    }
);

console.log(profile);