class ValidationError extends Error {
    constructor(message, details) {
        super(message);
        this.name = "ValidationError";
        this.details = details;
    }
};

class UserExistsError extends Error {
    constructor(message, details) {
        super(message);
        this.name = "UserExistsError";
        this.details = details;
    }
};

function validateUser(user) {
    if (!user.name) {
        throw new ValidationError("Name is required", { field: "name" });
    }
    if (!user.email) {
        throw new ValidationError("Email is required", { field: "email" });
    }
}

function registerUser(user) {
    validateUser(user);
    
    if (existingEmails.includes(user.email)) {
        throw new UserExistsError("Email already exists", { field: "email" });
    }
}

function handleRegistration(user) {
    try {
        registerUser(user);
        console.log("User Registered Successfully");
    } catch (error) {
        if (error.name === "ValidationError") {
            console.error("Validation Error:", 
                error.message, 
                error.details );

        } else if ( error.name === "UserExistsError") {
            console.error("User Exists Error:",
                 error.message, 
                 error.details );
        } else {
            console.error("Unexpected Error:", error);
        }
    }
}

// test cases

const user = {
    name: "Lauris",
    email: "lauris@example.com"
}

const existingEmails = ["lauris@example.com", "john@example.com"];

handleRegistration(user);